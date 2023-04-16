import { ICategoryAggregate } from "../ports/ICategoryAggrgate";
import { CategoryEntity } from "./CategoryEntity";


export class Catalogue implements ICategoryAggregate{
    constructor(private items:CategoryEntity[]){}

    addCategory(item: CategoryEntity): void {
        this.items.push(item)
    }
    removeCategory(item: CategoryEntity): void {
        this.items = this.items.filter(i => !i.equals(item) )
    }

    getItems(): CategoryEntity[] {
        return [...this.items]
    }
}