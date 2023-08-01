import { Repository } from "@vinstacore";


export async function loadCartApi(): Promise<Repository.OrderItem[]> {

    const resTest = (await fetch("http://localhost:3000/testData/cart.json"));
    const temp = await resTest.json()
    return temp.results

}