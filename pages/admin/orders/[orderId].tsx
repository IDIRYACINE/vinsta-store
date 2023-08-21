
import { Box, Typography } from "@mui/material"
import clsx from "clsx"
import { useParams } from 'next/navigation'
import { useAppSelector } from "@adminapp/store/clientHooks"
import { orderSelector } from "@adminapp/store/selectors"
import ShippingCard from "@adminapp/modules/orders/components/ShippingCard"
import ItemsList from "@adminapp/modules/orders/components/ItemsList"

function OrderDetaillsPage() {
    const orderId = useParams().orderId as string

    const order = useAppSelector(state => orderSelector({ ...state, orderId }))


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