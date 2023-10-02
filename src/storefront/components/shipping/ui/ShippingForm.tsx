"use client"

import { Container, Modal, Box } from "@mui/material"
import { ActionsRow, DisplayTypography } from "src/storefront/components/commons"
import { useState } from "react"
import { Destination, Repository, DeliveryType, destinations, calculateDeliveryPrice, orderDateIdFromDate } from "@vinstacore/index"
import { AppTextField, DestinationSelector } from "./Components"
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks"
import { selectCustomerCartItems, selectCustomerCartPrice, selectTrackingOrder } from "@vinstacore/store/selectors"

import { createOrderApi } from "@vinstacore/index"
import { generateOrder } from "../logic/helper"
import { updateOrderId } from "@vinstacore/store/customer/slices/cartSlice"

interface ShippingFormState {
    destination: Destination,
    fullName: string,
    phoneNumber: string,
    homeAddress: string,
    deliveryType: DeliveryType,
   
}

interface ShippingFormProps {
    cart: Repository.OrderItem[],
    totalPrice: number,
    stateObject: ShippingFormState,
    setStateObject: (state: ShippingFormState) => void,
    onClose: () => void,
    storeDateId : string | null,
    storeOrderId : string | null
}
export function ShippingForm(props: ShippingFormProps) {
    const { cart, onClose, stateObject,totalPrice, setStateObject,storeDateId,storeOrderId } = props
    const deliveryTypes = DeliveryType.values()

    const dispatch = useAppDispatch()




    const deliveryPrice = calculateDeliveryPrice(stateObject.deliveryType, stateObject.destination)

    function updateFullName(fullName: string) {
        setStateObject({
            ...stateObject,
            fullName
        })
    }

    function updatePhone(phoneNumber: string) {
        setStateObject({
            ...stateObject,
            phoneNumber
        })

    }

    function selectDestination(destination: Destination) {
        setStateObject({
            ...stateObject,
            destination
        })
    }

    function selectDeliveryType(deliveryType: DeliveryType) {
        setStateObject({
            ...stateObject,
            deliveryType
        })
    }

    function onHomeAddressChange(homeAddress: string) {
        setStateObject({
            ...stateObject,
            homeAddress
        })
    }
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
        value: stateObject.fullName,
        onChange: updateFullName,
        className: "mr-2"
    }


    const phoneFieldProps = {
        label: "Phone",
        value: stateObject.phoneNumber,
        onChange: updatePhone,
        enforcer : (value:string) => value.replace(/[^0-9]/g, '')

    }

    const totalPriceFieldProps = {
        label: "TotalPrice",
        value: (deliveryPrice + totalPrice).toString(),
        readOnly: true
    }


    const destinationSelectorProps = {
        destinations: destinations,
        destination: stateObject.destination,
        deliveryPrice,
        selectDestination: selectDestination,
        deliveryTypes: deliveryTypes,
        deliveryType: stateObject.deliveryType,
        selectDeliveryType: selectDeliveryType,
        homeAddress: stateObject.homeAddress,
        onHomeAddressChange: onHomeAddressChange
    }

    const actionsRowProps = {
        onCancel: handleCancel,
        onConfirm: handleShipping
    }


    function handleCancel() {
        onClose()
    }

    function handleShipping() {
        const order: Repository.Order = generateOrder({
            cart,
            deliveryType: stateObject.deliveryType,
            deliveryPrice,
            totalPrice,
            homeAddress: stateObject.homeAddress,
            destination: stateObject.destination,
            customer: stateObject.fullName,
            phone: stateObject.phoneNumber,
        })


        createOrderApi({ order, orderId: order.header.id }).then((res) => {
            dispatch(updateOrderId({ orderId: order.header.id, dateId: orderDateIdFromDate(order.header.createdAt)}))
        })

    }

    if (storeOrderId != null) {
        return (
            <Container sx={formStyle}>
                <DisplayTypography text={`Order Id: ${storeOrderId}`} />
                <DisplayTypography text={`Date Id: ${storeDateId}`} />

            </Container>
        )
    }

    return (
        <Container sx={formStyle}>
            <DisplayTypography text="Shipping Informations" />
            <Box className="flex flex-row w-full">
                <AppTextField {...fullNameFieldProps} />
                <AppTextField {...phoneFieldProps} />
            </Box>

            <DestinationSelector {...destinationSelectorProps} />
            <AppTextField {...totalPriceFieldProps} />

            <ActionsRow {...actionsRowProps} />

        </Container>
    )
}

interface ShippingDialogProps {
    isModalOpen: boolean,
    closeModel: () => void
}
export function ShippingDialog(props: ShippingDialogProps) {
    const { closeModel, isModalOpen } = props

    const cart = useAppSelector(state => selectCustomerCartItems(state))
    const totalPrice = useAppSelector(state => selectCustomerCartPrice(state))

    const {storeDateId,storeOrderId} = useAppSelector(selectTrackingOrder)

    const [stateObject, setStateObject] = useState<ShippingFormState>({
        destination: destinations[0],
        fullName: "",
        phoneNumber: "",
        homeAddress: "",
        deliveryType: DeliveryType.values()[0],

    })

    const canDisplayForm = (cart.length > 0) || (storeOrderId !== null)


    function onClose() {
        closeModel()
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

    const shippingFormProps = {
        cart,
        totalPrice,
        stateObject,
        setStateObject,
        onClose,
        storeDateId,storeOrderId
    }

    const ShippingFormBuilder =  (
                <Box sx={contentStyle} >
                    <ShippingForm {...shippingFormProps} />
                </Box>
    )

    let Widget : JSX.Element  = <DisplayTypography text="Cart is empty" />

    Widget = canDisplayForm ? ShippingFormBuilder : Widget


    return (
        <Modal style={modalStyle} open={isModalOpen}
            onClose={onClose}>

            {Widget}

        </Modal>
    )
}