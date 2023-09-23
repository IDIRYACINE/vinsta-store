
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useMemo } from "react";
import { setProductFilters } from "@vinstacore/store/customer/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { categoryProductsSelector, } from "@vinstacore/store/selectors";

import { IProductFilter } from "@vinstacore/index";
import { ProductFilterSearch } from "@storefront/components/commons/Filters";
import { useLoadDispatchProducts } from "@vinstacore/sdk/useProduct";
import { ProductGrid } from "@storefront/components/products/ui/ProductsGrid";



export default function Page() {
    const { isLoading } = useLoadDispatchProducts()

    const dispatch = useAppDispatch()


    const products = useAppSelector(state => categoryProductsSelector(state))

    const filters = useAppSelector(state => state.customerProducts.filters)


    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    const filteredProducts = useMemo(() => {
        if (products.length === 0) return []

        return products.filter((product) => {
            let shouldDisplay = true
            filters.forEach((filter) => {
                shouldDisplay = shouldDisplay && filter.compare(product)
            })

            if (shouldDisplay) {
                return product
            }
        })
    }, [products, filters])




    function onFilterChange(newFilters: IProductFilter[]) {
        dispatch(setProductFilters(newFilters))
    }

    const productFilterProps = {
        onFilterChange: onFilterChange,
        className: "flex-initial w-80 fixed left-0 bottom-0",
        filters: filters,
    }

    const productGridProps = {
        products: filteredProducts,
        className: "flex-1 p-2 h-full w-full ml-0 md:ml-80"
    }


    if (isLoading) {
        return (
            <Box className="flex flex-row h-full w-full justify-center items-center relative">
            </Box>
        )
    }

    return (
        <Box className="flex flex-row h-full w-full justify-center items-center relative">
            {
                isSmallScreen ? null : <ProductFilterSearch {...productFilterProps} />

            }

            {
                isLoading ? <CircularProgress /> : <ProductGrid {...productGridProps} />

            }


        </Box>
    )
}