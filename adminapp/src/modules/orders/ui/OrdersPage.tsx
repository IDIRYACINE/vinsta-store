'use client';

import clsx from "clsx"
import {  Repository } from "@vinstastore/vinstacore"
import OrdersTable from "../components/table/ui/OrdersTable"
import { useAppSelector } from "@adminapp/store/clientHooks";
import { UpdateOrderStatusDialog } from "../components/common/UpdateOrderStatusDialog";
import { orderHeaderSelector } from "@adminapp/store/selectors";


interface OrderPageProps {
    ordersHeaders: Repository.OrderHeader[]
}

function OrdersPage() {

    const ordersHeaders = useAppSelector(state => orderHeaderSelector(state))

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