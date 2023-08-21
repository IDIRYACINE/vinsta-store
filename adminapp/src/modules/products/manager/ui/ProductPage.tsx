'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import ProductManagerHeader from "./ProductManagerHeader"
import { ProductTable } from "../../table"

import { RootState, AppDispatch, setProducts, } from "@adminapp/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


import { DeleteProductDialog } from "./DeleteProductDialog"
import { useAppDispatch } from "@adminapp/store/clientHooks"
import { loadProductsApi } from "@vinstastore/vinstacore"



function ProductPage() {

    const headersData = ["Product Name", "Product Id", "Description", "Action"]


    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    const products = useAppSelector(state => state.products.products)

    const categoryId = useAppSelector(state => state.products.displayedCategoryId)!

    const dispatch = useAppDispatch()
    
    loadProductsApi({categoryId}).then(
        (products) => dispatch(setProducts(products))
    )


    return (
        <Box className={className}>
            <ProductManagerHeader />
            <ProductTable headersData={headersData} rowsData={products} />
            <DeleteProductDialog />
        </Box>


    )
}



export { ProductPage }



