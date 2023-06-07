'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import ProductManagerHeader from "./ProductManagerHeader"
import { ProductTable } from "../../table"

import { RootState, AppDispatch, } from "@adminapp/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


import { DeleteProductDialog } from "./DeleteProductDialog"



function ProductPage() {

    const headersData = ["Product Name", "Product Id", "Description", "Action"]


    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    const products = useAppSelector(state => state.products.products)




    return (
        <Box className={className}>
            <ProductManagerHeader />
            <ProductTable headersData={headersData} rowsData={products} />
            <DeleteProductDialog />
        </Box>


    )
}



export { ProductPage }



