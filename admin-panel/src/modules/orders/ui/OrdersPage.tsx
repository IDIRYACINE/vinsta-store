import { Box } from "@mui/material"
import clsx from "clsx"
import { mockOrderRows } from "../components/table/domain/TableEntity"
import OrdersTable from "../components/table/ui/OrdersTable"

function OrdersPage(){

    const headersData = ["Order ID", "Order Date","Status", "Totale"]
    const rows = mockOrderRows()

    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    return (
        <Box className={className}>
        <OrdersTable headersData={headersData} rowsData={rows} />
        </Box>
    )
}

export {OrdersPage}