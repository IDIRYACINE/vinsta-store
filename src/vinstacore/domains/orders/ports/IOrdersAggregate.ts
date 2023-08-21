import { OrderEntity } from "../domain/OrderEntity"

export interface IOrdersAggregate{
    addOrder(item:OrderEntity) : void
    removeOrder(item:OrderEntity) : void
    getItems() : OrderEntity[]
}