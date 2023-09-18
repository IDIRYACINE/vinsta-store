'use client'

import { Box, CircularProgress } from "@mui/material"
import clsx from "clsx"
import ProductManagerHeader from "./ProductManagerHeader"
import { ProductTable } from "../../table"


import { DeleteProductDialog } from "./DeleteProductDialog"
import { useLoadDispatchProductsAdmin } from "@vinstacore/sdk/useProduct"



function ProductPage() {

    const headersData = ["Product Image", "Product Name", "Description", "Action"]

    const className = clsx(["p-4 flex flex-col justify-center items-center"])


    const {isLoading,data} = useLoadDispatchProductsAdmin()

    if(isLoading){
        return (
            <Box className="flex flex-row h-full w-full justify-center items-center relative">
                <div className="flex flex-row justify-center items-center"><CircularProgress/></div>
            </Box>
        )
    }


    return (
        <Box className={className}>
            <ProductManagerHeader />
            <ProductTable headersData={headersData} rowsData={data} />
            <DeleteProductDialog />
        </Box>


    )
}



export { ProductPage }



