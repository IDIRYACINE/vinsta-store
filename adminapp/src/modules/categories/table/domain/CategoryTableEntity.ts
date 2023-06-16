import { Repository } from "@vinstacore"


 async function mockCategoryRows() : Promise<Repository.Category[]> {

    let categories :any  = await fetch("http://localhost:3000/testData/categories.json");

    categories = await categories.json();
    categories = categories.results


    return categories
}

export {mockCategoryRows}