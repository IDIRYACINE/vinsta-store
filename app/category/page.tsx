"use client";

import { loadProductsApi } from "adminapp/src";
import { ProductGrid } from "storefront/src/modules/products";
import { categoryProductsSelector, setProducts, useAppDispatch, useAppSelector } from "storefront/src/store";

export default function Page() {

    const dispatch = useAppDispatch()

    const displayedCategoryId = useAppSelector(state => state.products.displayedCategory)!



    const products = useAppSelector(state => categoryProductsSelector(state))

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


    return (
        <>
            <ProductGrid></ProductGrid>
        </>
    )
}