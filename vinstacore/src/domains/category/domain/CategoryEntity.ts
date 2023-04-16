import { EntityBase } from "@/commons/entity.base";
import { ProductEntity } from "@vinstacore/domains/product/domain/ProductEntity";
import { CategoryId, CategoryName, CategoryProductCount } from "./ValueObjects";

export class CategoryEntity implements EntityBase<CategoryEntity>{
    constructor(
        public readonly id: CategoryId,
        public readonly name: CategoryName,
        public readonly productCount: CategoryProductCount,
        public readonly productEntities: ProductEntity[],
        ) {

    }

    equals(other: CategoryEntity): boolean {
        return this.id.id === other.id.id;
    }
}