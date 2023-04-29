import { EntityBase } from "@vinstacore/commons/entity.base";
import { CategoryDescription, CategoryId, CategoryImage, CategoryName, CategoryProductCount } from "./ValueObjects";


interface CreateCategoryEntityProps {
    id: CategoryId
    name: CategoryName
    productCount: CategoryProductCount
    imageUrl: CategoryImage
    description: CategoryDescription

}

export class CategoryEntity implements EntityBase<CategoryEntity>{
    public readonly id: CategoryId
    public readonly name: CategoryName
    public readonly productCount: CategoryProductCount
    public readonly imageUrl: CategoryImage
    public readonly description: CategoryDescription
    items: any;
    header: any;
    shipping: any;

    constructor(
        props: CreateCategoryEntityProps
    ) {
        this.id = props.id;
        this.name = props.name;
        this.productCount = props.productCount;
        this.imageUrl = props.imageUrl;
        this.description = props.description;
    }

    equals(other: CategoryEntity): boolean {
        return this.id.value === other.id.value;
    }
}