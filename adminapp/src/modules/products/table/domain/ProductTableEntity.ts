import { Repository } from "@vinstastore/vinstacore"

 async function mockProductRows() : Promise<Repository.Product[]> {

    let products :any  = await fetch("/testData/products.json");

    products = await products.json();
    products = products.results

    return products
}

export {mockProductRows}