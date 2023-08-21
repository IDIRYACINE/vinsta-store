
import { Box, useMediaQuery  } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { loadProductsApi } from "@vinstacore/api/productApi";
import {  useMemo, useRef,useEffect } from "react";
import {  setProductFilters } from  "@vinstacore/store/customer/slices/productsSlice";
import { ProductGrid } from "@storefront/index";
import {  setProducts,  } from "@vinstacore/store/customer/slices/productsSlice";
import {   useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { categoryProductsSelector,  } from "@vinstacore/store/selectors";

import { IProductFilter } from "@vinstacore/index";
import { ProductFilterSearch } from "@storefront/components/Filters";



export default function Page() {

    const dispatch = useAppDispatch()

    const displayedCategoryId = useAppSelector(state => state.customerProducts.displayedCategory)!

    const products = useAppSelector(state => categoryProductsSelector(state))

    const filters = useAppSelector(state => state.customerProducts.filters)

    const mounted = useRef(false)

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    const filteredProducts = useMemo(() => {
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

    if ((products.length === 0) && mounted.current) {
        loadProductsApi({ categoryId: displayedCategoryId }).then((loadedProducts) => {
            if(loadedProducts.length === 0) return
            dispatch(setProducts(
                {
                    categoryId: displayedCategoryId,
                    products: loadedProducts
                }
            ))
        })
    }

    useEffect(() => {
        mounted.current = true
    },[])

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
        className: "flex-1 p-2 h-full ml-0 md:ml-80"
    }


    return (
        <Box className="flex flex-row h-screen justify-center items-center relative">
            {
                isSmallScreen ? null : <ProductFilterSearch {...productFilterProps} />

            }

            <ProductGrid {...productGridProps} />

        </Box>
    )
}