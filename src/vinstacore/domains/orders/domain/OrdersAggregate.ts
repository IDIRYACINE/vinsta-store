import { IOrdersAggregate } from "../ports/IOrdersAggregate";
import { OrderEntity } from "./OrderEntity";

export class OrdersAggregate implements IOrdersAggregate{
    constructor (private items :OrderEntity[])
    {}

    addOrder(item: OrderEntity): void {
        this.items.push(item)
    }
    removeOrder(item: OrderEntity): void {
        this.items = this.items.filter(i => !i.equals(item))
    }
    getItems(): OrderEntity[] {
        return [...this.items]
    }
}