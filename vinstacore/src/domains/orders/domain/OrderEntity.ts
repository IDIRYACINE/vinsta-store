import { EntityBase } from "@/commons/entity.base";
import { Address } from "@/domains/address";
import { OrderId, OrderStatus } from "./ValueObjects";

export class OrderEntity implements EntityBase<OrderEntity>{
    constructor(public readonly id: OrderId,
        public readonly delivery: Address,
        public readonly status: OrderStatus,
    ) { }

    equals(other: OrderEntity): boolean {
        return this.id.value === other.id.value
    }
}