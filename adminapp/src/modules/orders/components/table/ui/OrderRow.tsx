import { orderStatusfromString } from "@adminapp/modules/orders/domain/OrderStatus";
import { TableCell, TableRow, Typography } from "@mui/material"
import { Repository } from "@vinstacore";
import { OrderStatusLabel } from "./OrderStatus"

interface OrderTableCellProps {
    value: string
}
function OrderTableCell(props: OrderTableCellProps) {
    return (<TableCell><Typography> {props.value}</Typography></TableCell>)
}

interface OrderRowProps {
    item: Repository.OrderHeader,
    key: any,
    handleClick: (item: Repository.OrderHeader) => void,
}

function OrderRow(props: OrderRowProps) {
    const rawStatus = props.item.status
    const orderStatus = orderStatusfromString(rawStatus)

    function handleClick() {
        props.handleClick(props.item)
    }

    return (
        <TableRow onClick={handleClick}>
            <OrderTableCell value={props.item.id} />
            <OrderTableCell value={props.item.createdAt} />
            <TableCell><OrderStatusLabel status={orderStatus} /></TableCell>
            <OrderTableCell value={props.item.total.toString()} />
        </TableRow>
    )
}

interface OrderHeaderProps {
    headers: string[]
}

function OrderHeader(props: OrderHeaderProps) {
    const className = "font-bold"

    return (
        <TableRow>
            {props.headers.map((header) => (
                <TableCell className={className} key={header}>{header}</TableCell>
            ))}
        </TableRow>
    )
}


export { OrderRow, OrderHeader }

