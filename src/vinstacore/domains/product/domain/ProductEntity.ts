import { ProductDescription, ProductId, ProductImage, ProductName, ProductPrice, ProductQuantity } from "./ValueObjects";
import { EntityBase } from "@vinstacore/commons/entity.base";
import { ColorEntity } from "./ColorEntity";
import { SizeEntity } from "./SizeEntity";

interface ProductEntityProps {
    id: ProductId,
    name: ProductName,
    price: ProductPrice,
    description: ProductDescription,
    quantity: ProductQuantity,
    imageUrls : ProductImage[],
     color : ColorEntity
    size : SizeEntity
}

export class ProductEntity implements EntityBase<ProductEntity>{
    public readonly id: ProductId
    public readonly name: ProductName
    public readonly price: ProductPrice
    public readonly color : ColorEntity
    public readonly size : SizeEntity
    public readonly description: ProductDescription
    public readonly quantity: ProductQuantity
    public readonly imageUrls : ProductImage[]

    constructor(
        props: ProductEntityProps
    ) {
        this.id = props.id
        this.name = props.name
        this.price = props.price
        this.description = props.description
        this.quantity = props.quantity
        this.imageUrls = props.imageUrls
        this.color = props.color
        this.size = props.size
    }

    equals(other: ProductEntity): boolean {
        return this.id.value === other.id.value;
    }
}