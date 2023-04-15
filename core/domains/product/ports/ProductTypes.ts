import { ProductId, ProductName, ProductPrice, ProductDescription, ProductQuantity } from "../domain/ValueObjects";


export interface ProductProps {
    id: ProductId,
    name: ProductName,
    price: ProductPrice,
    description: ProductDescription,
    quantity: ProductQuantity,
}