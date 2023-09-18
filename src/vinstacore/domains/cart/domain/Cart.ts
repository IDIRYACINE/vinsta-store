import { ICartAggregate } from "../ports/ICartAggregate";
import { CartItem } from "./ValueObject";

export class Cart implements ICartAggregate{
    constructor(
        private items:CartItem[]
    ){}

    removeItem(item: CartItem): void {
        this.items = this.items.filter(i => i.itemId !== item.itemId);
    }

    getItems(): CartItem[] {
        return [...this.items];
    }

    addItem(item:CartItem){
        this.items.push(item);
    }


}