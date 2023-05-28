import { ProductEntity,ProductMapper } from "@vinstacore"




 async function mockProductRows() : Promise<ProductEntity[]> {
    const mapper = new ProductMapper()

    let products :any  = await fetch("/testData/products.json");

    products = await products.json();
    products = products.results

    products = products.map((Product: any) => {
        return mapper.toDomain(Product)
    })


    return products
}

export {mockProductRows}