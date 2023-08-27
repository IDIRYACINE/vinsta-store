
import { Container } from "@mui/material"

import { Box, Button, Typography } from "@mui/material"
import { AppTextField } from "@storefront/modules/shipping/ui/Components"
import { findOrderStatusApi } from "@vinstacore/api/orderApi"
import { Repository } from "@vinstacore/infrastructure/ports/IRepositories"
import { useState } from "react"

export default function DeliveryPage() {

    const [status, setStatus] = useState<string | null>(null)
    const [orderId, setOrderId] = useState("")
    const [dateId, setDateId] = useState("")


    function onOrderIdChange(value: string) {
        setOrderId(value)
    }

    function onDateIdChange(value: string) {
        setDateId(value)
    }

    function onTrackOrder() {
        findOrderStatusApi({
            orderId: orderId,
            dateId: dateId
        }).then((orderStatus) => {
            setStatus(orderStatus)
        })
    }


    const trackerFieldProps = {
        label: "Order Number",
        value: orderId,
        onChange: onOrderIdChange
    }

    const dateIdFieldProps = {
        label: "Date Id",
        value: dateId,
        onChange: onDateIdChange,
        className : "w-40"
    }

    return (
        <Container className="flex flex-col justify-center items-center ">


            <Typography >ID : {orderId}</Typography>
            <Typography className="mb-2">Status : {status}</Typography>

            <Box className="flex flex-row justify-start items-center max-w-fit">
                    <AppTextField {...dateIdFieldProps} />
                    <AppTextField {...trackerFieldProps} />

                <Button onClick={onTrackOrder}>Track</Button>


            </Box>
        </Container>
    )
}