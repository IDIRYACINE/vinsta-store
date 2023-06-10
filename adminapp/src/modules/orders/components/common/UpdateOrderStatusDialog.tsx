"use client";

import { OrderStatusSelector, BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Modal, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@adminapp/store/clientHooks";
import { closeUpdateOrderStatusModal, updateOrderStatus } from "@adminapp/store";
import { updateOrderApi } from "@adminapp/api/orderApi";
import { OrderStatus, orderStatusList } from "../../domain/OrderStatus";
import { useRef } from "react";


function UpdateOrderStatusDialog() {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.orders.isModalOpen)
    const orderId = useAppSelector(state => state.orders.editedOrder?.header.id)!

    const newOrderStatus = useRef<OrderStatus>(orderStatusList[0])

    function onClose() {
        dispatch(closeUpdateOrderStatusModal())
    }

    function onConfirm() {
        dispatch(updateOrderStatus(newOrderStatus.current))

        const updatedFields = {
            header: {
                status: newOrderStatus.current.name
            }
        }

        updateOrderApi({ orderId, updatedFields })

    }

    const orderStatusSelectProps = {
        statusList: orderStatusList,
        onChange: (orderStatusName: string) => newOrderStatus.current = orderStatusList.find(x => x.name === orderStatusName)!,
    }

    return (
        <Modal open={isModalOpen}
            onClose={onClose}>

            <Box className="flex flex-col justify-between items-center">
                <Typography variant="h6">Update Order Status</Typography>
                <OrderStatusSelector {...orderStatusSelectProps} />
                <BaseContainedButton onClick={onConfirm} >Confirm</BaseContainedButton>

            </Box>

        </Modal>
    )
}

export { UpdateOrderStatusDialog }