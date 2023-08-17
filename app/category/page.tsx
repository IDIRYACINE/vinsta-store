"use client";

import { Box, useMediaQuery  } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { loadProductsApi } from "adminapp/src";
import {  useMemo } from "react";
import { ProductFilterSearch, setProductFilters } from "@vinstastore/storefront";
import { ProductGrid } from "@vinstastore/storefront";
import { categoryProductsSelector, setProducts, useAppDispatch, useAppSelector } from "@vinstastore/storefront";
import { IProductFilter } from "@vinstastore/vinstacore";



export default function Page() {

    const dispatch = useAppDispatch()

    const displayedCategoryId = useAppSelector(state => state.products.displayedCategory)!

    const products = useAppSelector(state => categoryProductsSelector(state))

    const filters = useAppSelector(state => state.products.filters)

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

    if (products.length === 0) {
        loadProductsApi({ categoryId: displayedCategoryId }).then((loadedProducts) => {
            dispatch(setProducts(
                {
                    categoryId: displayedCategoryId,
                    products: loadedProducts
                }
            ))
        })
    }

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