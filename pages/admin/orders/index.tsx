
import { loadOrdersApi } from "@vinstacore/api/orderApi";

import clsx from "clsx"
import { useAppSelector, useAppDispatch } from "@adminapp/store/clientHooks";
import { orderHeaderSelector } from "@adminapp/store/selectors";
import OrdersTable from "@adminapp/modules/orders/components/table/ui/OrdersTable";
import { setOrders } from "@adminapp/store/slices/ordersSlice";

export default function Page() {

    const orders = useAppSelector(state => state.orders.orders)
    const ordersHeaders = useAppSelector(state => orderHeaderSelector(state))

    const dispatch = useAppDispatch()


    loadOrdersApi().then((res) => {
        dispatch(setOrders(res))
    })




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
