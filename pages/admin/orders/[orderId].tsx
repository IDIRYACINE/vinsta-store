
import { Box, Typography } from "@mui/material"
import clsx from "clsx"
import { useParams } from 'next/navigation'
import { useAppSelector } from "@vinstacore/store/clientHooks"
import { orderSelector } from "@vinstacore/store/selectors"
import ShippingCard from "@adminapp/modules/orders/components/ShippingCard"
import ItemsList from "@adminapp/modules/orders/components/ItemsList"
import { useEffect, useRef } from "react"

function OrderDetaillsPage() {

    const param = useParams()

    let orderId = useRef<string>("")

    useEffect(() => {
        orderId.current = param.orderId as string
    },[param,orderId])

    const order = useAppSelector(state => orderSelector({ ...state, orderId:orderId.current }))


    const className = clsx([
        "p-4 flex flex-col justify-evenly items-center h-screen md:flex-row"
    ])

    if (order === undefined) {
        return (
            <Typography variant="h4">Error Occured</Typography>
        )
    }

    return (
        <Box className={className}>


            <ShippingCard address={order.shipping} status={order.header.status} />

            <ItemsList items={order.items} />

        </Box>
    )
}


export default OrderDetaillsPage