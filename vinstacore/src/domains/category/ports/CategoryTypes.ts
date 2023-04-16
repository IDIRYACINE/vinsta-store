import { ProductEntity } from "@/domains/product/domain/ProductEntity";
import { CategoryId, CategoryName, CategoryProductCount } from "../domain/ValueObjects";

export interface CategoryProps {
    id: CategoryId,
    name: CategoryName,
    productCount: CategoryProductCount,
    productEntities: ProductEntity[],
}