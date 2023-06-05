import clsx from "clsx"
import { mockOrderHeaders } from "../components/table/domain/TableEntity"
import OrdersTable from "../components/table/ui/OrdersTable"

function OrdersPage(){

    const headersData = ["Order ID", "Order Date","Status", "Totale"]
    const rows = mockOrderHeaders()

    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    return (
        <div className={className}>
        <OrdersTable headersData={headersData} rowsData={rows} />
        </div>
    )
}

export {OrdersPage}