"use client"

import { Container, Modal, Box, Button, Typography } from "@mui/material"
import { ActionsRow, DisplayTypography } from "@storefront/components"
import { useState } from "react"
import { Destination, Repository, DeliveryType, destinations } from "@vinstastore/vinstacore"
import { AppTextField, DestinationSelector } from "./Components"
import { useAppDispatch, closeModel, useAppSelector, updateOrderId, setCart } from "@storefront/store"
import { createOrderApi } from "@vinstastore/vinstaadmin"
import { generateOrder } from "../logic/helper"


interface ShippingFormProps {
    cart: Repository.OrderItem[],
    totalPrice: number
}
export function ShippingForm(props: ShippingFormProps) {
    const { cart } = props
    const dispatch = useAppDispatch()
    const [orderId, setOrderId] = useState<string | null>(null)

    const deliveryTypes = DeliveryType.values()


    const [destination, selectDestination] = useState<Destination>(destinations[0])
    const [fullName, updateFullName] = useState<string>("")
    const [phoneNumber, updatePhone] = useState<string>("")
    const [homeAddress, onHomeAddressChange] = useState<string>("")
    const [deliveryType, selectDeliveryType] = useState<DeliveryType>(deliveryTypes[0])


    const formStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "start",
        padding: "0.5rem",
        height: "100%",
        width: "100%"
    }

    const fullNameFieldProps = {
        label: "FullName",
        value: fullName,
        onChange: updateFullName,
        className :"mr-2"
    }


    const phoneFieldProps = {
        label: "Phone",
        value: phoneNumber,
        onChange: updatePhone
    }

    const destinationSelectorProps = {
        destinations: destinations,
        destination: destination,
        selectDestination: selectDestination,
        deliveryTypes: deliveryTypes,
        deliveryType: deliveryType,
        selectDeliveryType: selectDeliveryType,
        homeAddress: homeAddress,
        onHomeAddressChange: onHomeAddressChange
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
            deliveryType,
            homeAddress,
            destination: destination,
            customer: fullName,
            phone: phoneNumber
        })

        createOrderApi({ order, orderId: order.header.id }).then((res) => {
        dispatch(updateOrderId(order.header.id))
        dispatch(setCart([]))
        setOrderId(order.header.id)
        })

    }

    if (orderId != null) {
        return (<Container sx={formStyle}>
            <DisplayTypography text={`Order Id: ${orderId}`} />
        </Container>)
    }

    return (
        <Container sx={formStyle}>
            <DisplayTypography text="Shipping Informations" />
            <Box className="flex flex-row w-full">
                <AppTextField {...fullNameFieldProps} />
                <AppTextField {...phoneFieldProps} />
            </Box>

            <DestinationSelector {...destinationSelectorProps} />

            <ActionsRow {...actionsRowProps} />

        </Container>
    )
}


export function ShippingDialog() {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.navigation.isModalOpen)
    const cart = useAppSelector(state => state.orders.cart)
    const totalPrice = useAppSelector(state => state.orders.totalPrice)


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

            {
                cart.length !== 0 ? <DisplayTypography text="Cart is empty" />
                    : <Box sx={contentStyle}>
                        <ShippingForm cart={cart} totalPrice={totalPrice} />
                    </Box>
            }



        </Modal>
    )
}