'use client'

import { OrderStatus } from "@adminapp/modules/orders/domain/OrderStatus"
import { Typography, Card, Tab, Tabs } from "@mui/material"
import { useState, SyntheticEvent } from "react"

import { setOrderDateId, setSelectedOrderStatus, } from "@vinstacore/store/admin/slices/ordersSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { BaseContainedButton } from "@adminapp/components/commons/Buttons";


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
    const dispatch = useAppDispatch()

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        const newOrderStauts = props.statusList.find(el => el.name === newValue)!

        dispatch(setSelectedOrderStatus(newOrderStauts))
        setOrderStatus(newValue);
    };

    const navigateToOrdersRoot = () => {
        dispatch(setOrderDateId(null))
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
        </div>
    )
}



export { OrderStatusLabel, OrderStatusTab }