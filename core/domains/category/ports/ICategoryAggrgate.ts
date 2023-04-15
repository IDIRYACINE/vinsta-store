import { CategoryEntity } from "../domain/CategoryEntity"


export interface ICategoryAggregate{
    addCategory(item:CategoryEntity) : void
    removeCategory(item:CategoryEntity) : void
    getItems() : CategoryEntity[]
}