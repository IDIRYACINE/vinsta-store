'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import ProductManagerHeader from "./ProductManagerHeader"
import { ProductTable } from "../../table"


import { DeleteProductDialog } from "./DeleteProductDialog"
import {  useAppSelector } from "@vinstacore/store/clientHooks"
import { useLoadDispatchProductsAdmin } from "@vinstacore/hooks/useProduct"



function ProductPage() {

    const headersData = ["Product Name", "Product Id", "Description", "Action"]

    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    const products = useAppSelector(state => state.adminProducts.products)

    useLoadDispatchProductsAdmin()

    


    return (
        <Box className={className}>
            <ProductManagerHeader />
            <ProductTable headersData={headersData} rowsData={products} />
            <DeleteProductDialog />
        </Box>


    )
}



export { ProductPage }



