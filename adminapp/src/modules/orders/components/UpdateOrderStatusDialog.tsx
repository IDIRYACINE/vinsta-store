"use client";

import { OrderStatusSelector, BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Modal, Typography,Paper } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@adminapp/store/clientHooks";
import { closeUpdateOrderStatusModal, updateOrderStatus } from "@adminapp/store";
import { updateOrderApi } from "@adminapp/api/orderApi";
import { OrderStatus, orderStatusList } from "../domain/OrderStatus";
import { useRef, useState } from "react";


interface UpdateOrderStatusDialogProps {
    isOpen: boolean
    onClose: () => void
}

function UpdateOrderStatusDialog(props: UpdateOrderStatusDialogProps) {
    const dispatch = useAppDispatch()
    const { isOpen, onClose } = props
    const orderId = useAppSelector(state => state.orders.editedOrder?.header.id)!

    const newOrderStatus = useRef<OrderStatus>(orderStatusList[0])

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

        <Modal className="flex flex-col justify-center items-center p-2" open={isOpen}
            onClose={onClose}>

            <Paper className="flex flex-col justify-between items-center">
                <Typography variant="h6">Update Order Status</Typography>
                <OrderStatusSelector {...orderStatusSelectProps} />

                <div className="flex flex-row justify-evenly items-center w-full mt-1">
                    <BaseContainedButton className="mr-1" onClick={onClose} >Cancel</BaseContainedButton>
                    <BaseContainedButton onClick={onConfirm} >Confirm</BaseContainedButton>

                </div>

            </Paper>

        </Modal>
    )
}

function UpdateOrderStatusButton() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function onOpen() {
        setIsModalOpen(true)
    }

    function onClose() {
        setIsModalOpen(false)
    }

    return (
        <div >

            <BaseContainedButton onClick={onOpen}>Update Status</BaseContainedButton>
            <UpdateOrderStatusDialog isOpen={isModalOpen} onClose={onClose} />
        </div>
    )
}

export { UpdateOrderStatusDialog, UpdateOrderStatusButton }