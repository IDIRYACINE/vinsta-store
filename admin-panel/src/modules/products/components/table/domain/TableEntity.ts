import { ProductEntity, ProductMapper } from "@vinstacore";

import mockProducts from "../../../tests/TestProducts";

export function mockProductRows(): ProductEntity[] {
    const mapper = new ProductMapper()


    const products = mockProducts.map(raw => {
        return mapper.toDomain(raw)
    })

    return products

}

const productHeaders = [
    "Product" ,""
]