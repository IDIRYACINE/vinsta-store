"use client";

import { loadProductsApi } from "adminapp/src";
import { ProductGrid } from "storefront/src/modules/products";
import { setProducts, useAppDispatch, useAppSelector } from "storefront/src/store";

export default async function Page(){

    const dispatch = useAppDispatch()

    const displayedCategoryId = useAppSelector(state => state.products.displayedCategory)!

    const products = useAppSelector(
        state =>
            state.products.products
                .filter(products => products.categoryId === displayedCategoryId)
               
    );

    if(products.length === 0){
        const loadedProducts = await loadProductsApi({categoryId:displayedCategoryId})
        console.log(loadedProducts)
        dispatch(setProducts(
            {
                categoryId:displayedCategoryId,
                products:loadedProducts
            }
        ))
    }


    return (
        <>
            <ProductGrid></ProductGrid>
        </>
    )
}