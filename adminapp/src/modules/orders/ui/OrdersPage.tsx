'use client';

import clsx from "clsx"
import {  Repository } from "@vinstacore"
import OrdersTable from "../components/table/ui/OrdersTable"
import { useAppSelector } from "@adminapp/store/clientHooks";
import { UpdateOrderStatusDialog } from "../components/common/UpdateOrderStatusDialog";


interface OrderPageProps {
    ordersHeaders: Repository.OrderHeader[]
}

function OrdersPage() {
    const orderStatus = useAppSelector(state => state.orders.selectedOrderStatus)

    const ordersHeaders = useAppSelector(state => state.orders.orders
        .filter(order => order.header.status === orderStatus.name)
        .map(order => order.header))

    const headersData = ["Order ID", "Order Date", "Status", "Totale"]

    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    return (
        <div className={className}>
            <OrdersTable headersData={headersData} rowsData={ordersHeaders} />
            <UpdateOrderStatusDialog/>
        </div>
    )
}

export { OrdersPage }