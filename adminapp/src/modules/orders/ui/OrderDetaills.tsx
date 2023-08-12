'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import { Repository } from "@vinstastore/vinstacore"
import ShippingCard from "../components/shipping/ShippingCard"

interface OrderDetaillsProps {
    order: Repository.Order
}

import { useSearchParams } from 'next/navigation'
import { useAppSelector } from "@adminapp/store/clientHooks"

function OrderDetaills() {
    const orderId = useSearchParams().get("orderId")!

    const order = useAppSelector(state => state.orders.orders.find(order => order.header.id === orderId))!

    const className = clsx([
        "p-4 flex flex-col justify-center items-center"
    ])

    return (
        <Box className={className}>
            <ShippingCard address={order.shipping} />
        </Box>
    )
}


export { OrderDetaills }