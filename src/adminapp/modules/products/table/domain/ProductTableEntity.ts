import { Repository } from "@vinstacore/index"

 async function mockProductRows() : Promise<Repository.Product[]> {

    let products :any  = await fetch("/testData/products.json");

    products = await products.json();
    products = products.results

    return products
}

export {mockProductRows}