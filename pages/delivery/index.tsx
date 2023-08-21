
import { Container } from "@mui/material"

import { Box, Button, Typography } from "@mui/material"
import { AppTextField } from "@storefront/modules/shipping/ui/Components"
import { findOrderApi } from "@vinstacore/api/orderApi"
import { Repository } from "@vinstacore/infrastructure/ports/IRepositories"
import { useState } from "react"

export default function DeliveryPage() {

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

    return (
        <Container className="flex flex-col justify-center items-center ">


            <Typography >ID : {order?.header?.id}</Typography>
            <Typography className="mb-2">Status : {order?.header?.status}</Typography>

            <Box className="flex flex-row justify-between">
                <AppTextField {...trackerFieldProps} />
                <Button onClick={onTrackOrder}>Track</Button>


            </Box>
        </Container>
    )
}