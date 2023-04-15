import { ProductDescription, ProductId, ProductName, ProductPrice, ProductQuantity } from "./ValueObjects";
import { EntityBase } from "@/commons/entity.base";

export class ProductEntity implements EntityBase<ProductEntity>{
    constructor(
        public readonly id:ProductId,
        public readonly name: ProductName,
        public readonly price: ProductPrice,
        public readonly description: ProductDescription,
        public readonly quantity: ProductQuantity,
    ){

    }

    equals(other: ProductEntity): boolean {
        return this.id.id === other.id.id;
    }
}