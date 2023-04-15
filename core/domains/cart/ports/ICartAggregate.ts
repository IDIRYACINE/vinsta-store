import { CartItem } from "../domain/ValueObject";

export interface ICartAggregate{
    addItem(item:CartItem) : void
    removeItem(item:CartItem) : void
    getItems() : CartItem[]
}