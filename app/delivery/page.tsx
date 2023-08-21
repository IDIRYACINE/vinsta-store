"use client"

import { Container } from "@mui/material"
import { DeliveryTracker } from "@storefront/index";

export default function DeliveryPage() {
    return (<Container  className="flex flex-col justify-center items-center h-screen w-screen">
        <DeliveryTracker />
    </Container>)
}