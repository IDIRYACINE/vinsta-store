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
                shouldDisplay = filter.compare(product)
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


    return (
        <Box className="flex flex-col h-screen justify-center items-center">
            <ProductFilterSearch onFilterChange={onFilterChange} />

            <ProductGrid products={filteredProducts} ></ProductGrid>

        </Box>
    )
}