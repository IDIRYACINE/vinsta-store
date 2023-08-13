"use client";

import { Box } from "@mui/material";
import { loadProductsApi } from "adminapp/src";
import { useEffect, useMemo, useRef, useState } from "react";
import { ProductFilterSearch } from "@vinstastore/storefront";
import { ProductGrid } from "@vinstastore/storefront";
import { categoryProductsSelector, setProducts, useAppDispatch, useAppSelector } from "@vinstastore/storefront";
import { IProductFilter } from "@vinstastore/vinstacore";



export default function Page() {

    const dispatch = useAppDispatch()

    const displayedCategoryId = useAppSelector(state => state.products.displayedCategory)!

    const products = useAppSelector(state => categoryProductsSelector(state))

    const [filters, setFilters] = useState<IProductFilter[]>([]);

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
        setFilters(newFilters)
    }

    const productFilterProps = {
        onFilterChange : onFilterChange,
        className : "flex-initial w-80",
        filters:filters,
    }

    const productGridProps = {
        products : filteredProducts,
        className : "flex-1 p-2" 
    }


    return (
        <Box className="flex flex-row h-screen justify-center items-center">
            <ProductFilterSearch {...productFilterProps} />

            <ProductGrid {...productGridProps} />

        </Box>
    )
}