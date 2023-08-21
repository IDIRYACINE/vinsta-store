'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import ProductManagerHeader from "./ProductManagerHeader"
import { ProductTable } from "../../table"

import { setProducts, } from "@vinstacore/store/admin/slices/productsSlice";

import { DeleteProductDialog } from "./DeleteProductDialog"
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks"
import { loadProductsApi } from "@vinstacore/index"



function ProductPage() {

    const headersData = ["Product Name", "Product Id", "Description", "Action"]



    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    const products = useAppSelector(state => state.adminProducts.products)

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)!

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



