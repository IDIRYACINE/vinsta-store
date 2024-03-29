
import { Box, Typography } from "@mui/material"
import clsx from "clsx"
import { useAppSelector } from "@vinstacore/store/clientHooks"
import { orderSelector } from "@vinstacore/store/selectors"
import ShippingCard from "@adminapp/components/orders/components/ShippingCard"
import ItemsList from "@adminapp/components/orders/components/ItemsList"
import { useLoadOrderIdParam } from "@vinstacore/sdk/useOrder"
import { orderDateIdFromDate } from "@vinstacore/index"

function OrderDetaillsPage() {

    const {orderId} = useLoadOrderIdParam() 

    const order = useAppSelector(state => orderSelector({ ...state, orderId:orderId }))


    const className = clsx([
        "p-4 flex flex-col w-full justify-evenly items-center h-screen md:flex-row"
    ])

    if (order === undefined) {
        return (
            <Typography variant="h4">Error Occured</Typography>
        )
    }

    const shoppingCardProps = {
        address: order.shipping,
        status: order.header.status,
        restocked: order.header.restock,
        orderId: order.header.id,
        dateId: orderDateIdFromDate(order.header.createdAt),
        items : order.items,
        totalPrice : order.header.total
    }

    return (
        <Box className={className}>


            <ShippingCard {...shoppingCardProps} />

            <ItemsList items={order.items} />

        </Box>
    )
}


export default OrderDetaillsPage