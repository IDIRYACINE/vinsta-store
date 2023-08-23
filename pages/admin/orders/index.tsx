import clsx from "clsx"
import { useAppSelector,  } from "@vinstacore/store/clientHooks";
import { orderHeaderSelector } from "@vinstacore/store/selectors";
import OrdersTable from "@adminapp/modules/orders/components/table/ui/OrdersTable";
import { useLoadDispatchOrders } from "@vinstacore/hooks/useOrder";

export default function Page() {

    const ordersHeaders = useAppSelector(state => orderHeaderSelector(state))

    useLoadDispatchOrders()




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
