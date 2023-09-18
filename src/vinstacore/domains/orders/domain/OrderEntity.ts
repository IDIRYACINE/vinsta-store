import { EntityBase } from "@vinstacore/commons/entity.base";
import { Contact } from "@vinstacore/domains/address";
import { OrderDate, OrderId, OrderItem, OrderStatus, OrderTotalPrice } from "./ValueObjects";

export class OrderEntity implements EntityBase<OrderEntity>{
    constructor(
        public readonly header: OrderHeader,
        public readonly shipping: Contact,
        public readonly items: OrderItem[]
    ) { }

    equals(other: OrderEntity): boolean {
        return this.header.equals(other.header)
    }

    dateId(): string {
        return this.header.createdAt.dateId();

    }
}

export class OrderHeader implements EntityBase<OrderHeader>{
    constructor(
        public readonly id: OrderId,
        public readonly status: OrderStatus,
        public readonly createdAt: OrderDate,
        public readonly total: OrderTotalPrice,
    ) { }

    equals(other: OrderHeader): boolean {
        return this.id.value === other.id.value
    }
}


export function orderDateIdFromDate(date: Date|string): string {

    if (typeof date === 'string') {
        date = new Date(date);
    }
    
    function padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }

    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('');
}


export function formatOrderIdDisplay(dateId:string): string{
    return dateId.slice(0,2) + '/' + dateId.slice(2,4) + '/' + dateId.slice(4,8)
}