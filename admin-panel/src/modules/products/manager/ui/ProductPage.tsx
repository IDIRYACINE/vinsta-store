import { Box } from "@mui/material"
import clsx from "clsx"
import ProductManagerHeader from "./ProductManagerHeader"
import { ProductTable } from "../../table"

import { observer } from "mobx-react"
import { ProductsState } from "../state/ProductsState"
import { DeleteProductDialog } from "./DeleteProductDialog"
import { useContext, useEffect, useMemo } from "react"
import { AdminAppContext } from "@admin/components/context/AppContext"


interface StateProps {
    store: ProductsState
}

function ProductPage() {

    const headersData = ["Product Name", "Product Id", "Description", "Action"]


    const { productsState } = useContext(AdminAppContext)
    const className = clsx(["p-4 flex flex-col justify-center items-center"])




    useEffect(() => {
        productsState.loadMockProducts()
    }, [productsState])




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



