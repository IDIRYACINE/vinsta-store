'use client'

import { Box ,Typography} from "@mui/material"
import clsx from "clsx"
import { Repository } from "@vinstastore/vinstacore"
import ShippingCard from "../components/shipping/ShippingCard"

interface OrderDetaillsProps {
    order: Repository.Order
}

import { useParams } from 'next/navigation'
import { useAppSelector } from "@adminapp/store/clientHooks"
import { orderSelector } from "@adminapp/store/selectors"

function OrderDetaills() {
    const orderId  = useParams().orderId as string

    const order = useAppSelector(state => orderSelector({...state,orderId}))

    const className = clsx([
        "p-4 flex flex-col justify-center items-center h-screen"
    ])

    return (
        <Box className={className}>
            {
                order === undefined ? <Typography variant="h4">Error Occured</Typography> :
                <ShippingCard address={order.shipping} />
            }
        </Box>
    )
}


export { OrderDetaills }