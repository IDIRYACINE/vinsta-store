"use client"

import { Container, Modal, Box, Button, Typography } from "@mui/material"
import { ActionsRow, DisplayTypography } from "@storefront/components"
import { useState } from "react"
import { Repository } from "@vinstacore"
import { AppTextField, DestinationSelector } from "./Components"
import { useAppDispatch, closeModel, useAppSelector, updateOrderId, setCart } from "@storefront/store"
import { destinations } from "../data/destinations"
import { createOrderApi } from "../../../../../adminapp/src/api/orderApi"
import { generateOrder } from "../logic/helper"


interface ShippingFormProps {
    cart: Repository.OrderItem[]
}
export function ShippingForm(props: ShippingFormProps) {
    const { cart } = props
    const dispatch = useAppDispatch()


    const [destination, selectDestination] = useState<Repository.Destination>(destinations[0])
    const [fullName, updateFullName] = useState<string>("")
    const [phoneNumber, updatePhone] = useState<string>("")


    const formStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        padding: "0.5rem",
        height: "100%",
        width: "100%"
    }

    const fullNameFieldProps = {
        label: "FullName",
        value: fullName,
        onChange: updateFullName
    }


    const phoneFieldProps = {
        label: "Phone",
        value: phoneNumber,
        onChange: updatePhone
    }

    const destinationSelectorProps = {
        destinations: destinations,
        destination: destination,
        selectDestination: selectDestination
    }

    const actionsRowProps = {
        onCancel: handleCancel,
        onConfirm: handleShipping
    }


    function handleCancel() {
        dispatch(closeModel())
    }

    function handleShipping() {
        const order: Repository.Order = generateOrder({
            cart,
            destination: destination,
            customer: fullName,
            phone: phoneNumber
        })

        createOrderApi({ order, orderId: order.header.id }).then((res) => {
            dispatch(updateOrderId(order.header.id))
            dispatch(setCart([]))
            dispatch(closeModel())
        })

    }

    return (
        <Container sx={formStyle}>
            <DisplayTypography text="Shipping Informations" />
            <AppTextField {...fullNameFieldProps} />
            <AppTextField {...phoneFieldProps} />

            <DestinationSelector {...destinationSelectorProps} />

            <ActionsRow {...actionsRowProps} />

        </Container>
    )
}


export function ShippingDialog() {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.navigation.isModalOpen)
    const cart = useAppSelector(state => state.orders.cart)

    function onClose() {
        dispatch(closeModel())
    }

    const contentStyle = {
        height: "80vh",
        width: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",

    }

    const modalStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }


    return (
        <Modal style={modalStyle} open={isModalOpen}
            onClose={onClose}>

            <Box sx={contentStyle}>
                <ShippingForm cart={cart} />
            </Box>

        </Modal>
    )
}