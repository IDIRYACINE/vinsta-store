import {   OrderHeader, OrderMapper } from "@vinstacore";
import mockOrders from "../../../tests/MockOrders";

interface RowData{
    value: string;
}

class OrderRowEntity {

    constructor(public readonly orderHeader: OrderHeader){
    }

    toRowData() : RowData[]{
        return [
            {value: this.orderHeader.id.value.toString()},
            {value: this.orderHeader.createdAt.value.toString()},
            {value: this.orderHeader.status.value.toString()},
            {value: this.orderHeader.total.value.toString()},
        ]
    }
}

function mockOrderRows() : OrderRowEntity[] {
    const mapper = new OrderMapper()

    const orders = mockOrders.map(raw => {
        const entity = mapper.toDomain(raw)
        return new OrderRowEntity(entity.header)
    })

    return orders
}

export {mockOrderRows,OrderRowEntity}