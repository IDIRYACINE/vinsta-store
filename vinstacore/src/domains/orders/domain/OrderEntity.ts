import { EntityBase } from "@vinstacore/commons/entity.base";
import { Address } from "@vinstacore/domains/address";
import { OrderDate, OrderId, OrderItem, OrderStatus, OrderTotalPrice } from "./ValueObjects";

export class OrderEntity implements EntityBase<OrderEntity>{
    constructor(
        public readonly header: OrderHeader,
        public readonly shipping: Address,
        public readonly items: OrderItem[]
    ) { }

    equals(other: OrderEntity): boolean {
        return this.header.equals(other.header)
    }
}

export class OrderHeader implements EntityBase<OrderHeader>{
    constructor(
        public readonly id: OrderId,
        public readonly status: OrderStatus,
        public readonly createdAt: OrderDate,
        public readonly total : OrderTotalPrice,
    ) { }

    equals(other: OrderHeader): boolean {
        return this.id.value === other.id.value
    }
}