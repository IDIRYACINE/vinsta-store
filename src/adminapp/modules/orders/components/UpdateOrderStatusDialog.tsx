"use client";

import { OrderStatusSelector, BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { Box, Modal, Typography,Paper } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { closeUpdateOrderStatusModal, updateOrderStatus } from "@vinstacore/store/admin/slices/ordersSlice";
import { orderDateIdFromDate, updateOrderStatusApi } from "@vinstacore/index";
import { OrderStatus, orderStatusList } from "../domain/OrderStatus";
import { useRef, useState } from "react";
import { useLoadOrderIdParam } from "@vinstacore/hooks/useOrder";
import { orderSelector } from "@vinstacore/store/selectors";


interface UpdateOrderStatusDialogProps {
    isOpen: boolean
    onClose: () => void
}

function UpdateOrderStatusDialog(props: UpdateOrderStatusDialogProps) {
    const dispatch = useAppDispatch()
    const { isOpen, onClose } = props
    const {orderId} = useLoadOrderIdParam()

    const order = useAppSelector(state => orderSelector({...state , orderId}))

    const newOrderStatus = useRef<OrderStatus>(orderStatusList[0])

    function onConfirm() {
        if(!order) return

        dispatch(updateOrderStatus(newOrderStatus.current))

        const orderStatus =  newOrderStatus.current.name
            
        const dateId = orderDateIdFromDate(order.header.createdAt)

        updateOrderStatusApi({ orderId, dateId,orderStatus })

        onClose()

    }

    const orderStatusSelectProps = {
        statusList: orderStatusList,
        onChange: (orderStatusName: string) => newOrderStatus.current = orderStatusList.find(x => x.name === orderStatusName)!,
    }

    return (

        <Modal className="flex flex-col justify-center items-center p-2" open={isOpen}
            onClose={onClose}>

            <Paper className="flex flex-col justify-between items-center p-2">
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