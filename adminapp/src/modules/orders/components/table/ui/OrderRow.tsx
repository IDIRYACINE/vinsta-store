import { OrderStatus } from "@adminapp/modules/orders/domain/OrderStatus"
import { TableCell, TableRow, Typography } from "@mui/material"
import { OrderRowEntity } from "../domain/TableEntity"
import { OrderStatusLabel } from "./OrderStatus"

interface OrderTableCellProps {
    value: string
}
function OrderTableCell(props: OrderTableCellProps) {
    return (<TableCell><Typography> {props.value}</Typography></TableCell>)
}

interface OrderRowProps {
    item: OrderRowEntity,
    key: any,
    handleClick: (item:OrderRowEntity) => void,
}

function OrderRow(props: OrderRowProps) {
    const rawStatus = props.item.orderHeader.status.value
    const orderStatus = OrderStatus.fromString(rawStatus)

    function handleClick() {
        props.handleClick(props.item)
    }

    return (
        <TableRow onClick={handleClick}>
            <OrderTableCell value={props.item.orderHeader.id.value} />
            <OrderTableCell value={props.item.orderHeader.createdAt.value.toString()} />
            <TableCell><OrderStatusLabel status={orderStatus} /></TableCell>
            <OrderTableCell value={props.item.orderHeader.total.value.toString()} />
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