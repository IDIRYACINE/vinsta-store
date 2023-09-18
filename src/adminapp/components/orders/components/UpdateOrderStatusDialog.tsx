"use client";

import { OrderStatusSelector, BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { TextField, Modal, Typography, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { updateOrderStatus } from "@vinstacore/store/admin/slices/ordersSlice";
import { orderDateIdFromDate, updateOrderStatusApi } from "@vinstacore/index";
import { OrderStatus, orderStatusList } from "../domain/OrderStatus";
import { useState } from "react";
import { useLoadOrderIdParam } from "@vinstacore/hooks/useOrder";
import { orderSelector } from "@vinstacore/store/selectors";


interface UpdateOrderStatusDialogProps {
    isOpen: boolean
    onClose: () => void,
    setOrderStatus: (orderStatus: OrderStatus) => void
    newOrderStatus: OrderStatus
}

function UpdateOrderStatusDialog(props: UpdateOrderStatusDialogProps) {
    const dispatch = useAppDispatch()
    const { isOpen, onClose, newOrderStatus, setOrderStatus } = props
    const { orderId } = useLoadOrderIdParam()

    const order = useAppSelector(state => orderSelector({ ...state, orderId }))


    function onConfirm() {
        if (!order) return

        dispatch(updateOrderStatus({
            orderId: order.header.id,
            status: newOrderStatus
        }))

        const orderStatus = newOrderStatus.name

        const dateId = orderDateIdFromDate(order.header.createdAt)

        updateOrderStatusApi({ orderId, dateId, orderStatus })

        onClose()

    }

    function onUpdateOrderStatus(orderStatusName: string) {
        setOrderStatus(orderStatusList.find(x => x.name === orderStatusName)!)

    }

    const orderStatusSelectProps = {
        statusList: orderStatusList,
        onChange: onUpdateOrderStatus,
        value: newOrderStatus.name
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

interface UpdateOrderStatusButtonProps {
    status: string
}
function UpdateOrderStatusButton(props: UpdateOrderStatusButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newOrderStatus, setOrderStatus] = useState<OrderStatus>(orderStatusList[0])

    function onOpen() {
        setIsModalOpen(true)
    }

    function onClose() {
        setIsModalOpen(false)
    }


    const dialogProps = {
        isOpen: isModalOpen,
        onClose: onClose,
        setOrderStatus: setOrderStatus,
        newOrderStatus: newOrderStatus
    }
    return (
        <div className="flex flex-row justify-between w-full">
            <TextField id="outlined-order-status" className="mr-1" label="Order Status" variant="outlined" value={props.status} InputProps={{
                readOnly: true,
            }} />

            <BaseContainedButton onClick={onOpen}>Update Status</BaseContainedButton>
            <UpdateOrderStatusDialog {...dialogProps} />
        </div>
    )
}

export { UpdateOrderStatusDialog, UpdateOrderStatusButton }