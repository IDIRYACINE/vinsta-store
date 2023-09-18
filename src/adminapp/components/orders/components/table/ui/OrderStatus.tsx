'use client'

import { OrderStatus } from "@adminapp/components/orders/domain/OrderStatus"
import { Typography, Card, Tab, Tabs } from "@mui/material"
import { useState, SyntheticEvent } from "react"

import { deleteOrdersSegment, setOrderDateId, setSelectedOrderStatus, } from "@vinstacore/store/admin/slices/ordersSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { deleteOrderSegmentApi } from "@vinstacore/api/orderApi";
import { DeleteOrderSegmentDialog } from "../../DeleteOrderSectionDialog";


interface OrderStatusLabelProps {
    status: OrderStatus
}

function OrderStatusLabel(props: OrderStatusLabelProps) {
    const classNameTypography = `font-bold text-${props.status.color}`

    return (

        <Typography className={classNameTypography}>
            {props.status.name}
        </Typography>

    )
}

interface OrderStatusTabProps {
    statusList: OrderStatus[]
}
function OrderStatusTab(props: OrderStatusTabProps) {
    const [orderStatus, setOrderStatus] = useState<string>(props.statusList[0].name);
    const displayedDateId = useAppSelector(state => state.adminOrders.displayedDateId)
    const dispatch = useAppDispatch()

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        const newOrderStauts = props.statusList.find(el => el.name === newValue)!

        dispatch(setSelectedOrderStatus(newOrderStauts))
        setOrderStatus(newValue);
    };

    const navigateToOrdersRoot = () => {
        dispatch(setOrderDateId(null))
    }


    const deleteOrderSegment = () => {
        deleteOrderSegmentApi({
            dateId : displayedDateId!
        }).then(() => {
            dispatch(deleteOrdersSegment())
        })
        setIsDeleteDialogOpen(false)
    }

    const displayDeleteDialog = ( ) =>{
        setIsDeleteDialogOpen(true)
    }

    const dialogProps = {
        isOpen: isDeleteDialogOpen,
        onCancel: () => setIsDeleteDialogOpen(false),
        onConfirm: deleteOrderSegment
    }

    return (
        <div className="flex flex-row w-full items-center justify-between">
            <Card className="mb-1">
                <Tabs value={orderStatus} onChange={handleChange} aria-label="order status tab">
                    {
                        props.statusList.map((status) => {
                            return <Tab key={`tab-${status.name}`} value={status.name} label={status.name} />
                        })
                    }
                </Tabs>
            </Card>
            <BaseContainedButton onClick={navigateToOrdersRoot}>Back</BaseContainedButton>
            <BaseContainedButton onClick={displayDeleteDialog}>Delete</BaseContainedButton>
            <DeleteOrderSegmentDialog {...dialogProps}/>

        </div>
    )
}



export { OrderStatusLabel, OrderStatusTab }