"use client"
export const dynamic = 'force-dynamic'

import { AppTextField } from "./Components"
import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { Repository ,findOrderApi} from "@vinstacore/index"


export function DeliveryTracker() {

    const [order, setOrder] = useState<Repository.Order | null>(null)
    const [orderId, setOrderId] = useState("")


    function onOrderIdChange(value: string) {
        setOrderId(value)
    }

    function onTrackOrder() {
        findOrderApi({

        }).then((order) => {
            setOrder(order)
        })
    }


    const trackerFieldProps = {
        label: "Order Number",
        value: orderId,
        onChange: onOrderIdChange
    }


    return (<Box>

        <Typography >ID : {order?.header?.id}</Typography>
        <Typography className="mb-2">Status : {order?.header?.status}</Typography>

        <Box className="flex flex-row justify-between">
            <AppTextField {...trackerFieldProps} />
            <Button onClick={onTrackOrder}>Track</Button>

        </Box>
    </Box>)
}