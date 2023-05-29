'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import ProductManagerHeader from "./ProductManagerHeader"
import { ProductTable } from "../../table"

import { observer } from "mobx-react"
import { ProductsState } from "../state/ProductsState"
import { DeleteProductDialog } from "./DeleteProductDialog"
import { adminContext } from "@adminapp/components/context/AppContext"


interface StateProps {
    store: ProductsState
}

function ProductPage() {

    const headersData = ["Product Name", "Product Id", "Description", "Action"]


    const { productsState } = adminContext
    const className = clsx(["p-4 flex flex-col justify-center items-center"])


    productsState.loadMockProducts()


    const View = observer((props: StateProps) => {

        const ProductDialogProps = {
            isOpen: props.store.isModalOpen
        }

        return (
            <Box className={className}>
                <ProductManagerHeader />
                <ProductTable headersData={headersData} rowsData={props.store.products} />
                <DeleteProductDialog {...ProductDialogProps} />
            </Box>


        )
    })


    return (<View store={productsState} />)
}

export { ProductPage }



