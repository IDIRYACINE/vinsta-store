import { Repository } from "@vinstacore";


export async function loadCartApi(): Promise<Repository.Product[]> {

    const resTest = (await fetch("http://localhost:3000/testData/products.json"));
    const temp = await resTest.json()
    return temp.results

}