import { Repository } from "@vinstastore/vinstacore";
import mockOrders from "../../../tests/MockOrders";

interface RowData {
    value: string;
}


function orderToRowData(orderHeader: Repository.OrderHeader): RowData[] {
    return [
        { value: orderHeader.id },
        { value: orderHeader.createdAt },
        { value: orderHeader.status },
        { value: orderHeader.total.toString() },
    ]
}


export { orderToRowData }