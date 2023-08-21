
import { loadOrdersApi } from "@vinstacore/api/orderApi";

import clsx from "clsx"
import { useAppSelector, useAppDispatch } from "@vinstacore/store/clientHooks";
import { orderHeaderSelector } from "@vinstacore/store/selectors";
import OrdersTable from "@adminapp/modules/orders/components/table/ui/OrdersTable";
import { setOrders } from "@vinstacore/store/admin/slices/ordersSlice";
import { useEffect } from "react";

export default function Page() {

    const ordersHeaders = useAppSelector(state => orderHeaderSelector(state))

    const dispatch = useAppDispatch()


    useEffect(() => {
        loadOrdersApi().then((res) => {
            dispatch(setOrders(res))
        })
    
    },[dispatch])




    const headersData = ["Order ID", "Order Date", "Status", "Totale"]

    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    return (
        <div className="flex justify-center items-center">

            <div className={className}>
                <OrdersTable headersData={headersData} rowsData={ordersHeaders} />
            </div>
        </div>
    )
}
