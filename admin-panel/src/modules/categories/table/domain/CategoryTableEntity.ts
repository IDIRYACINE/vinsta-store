import { CategoryEntity,CategoryMapper } from "@vinstacore"




 async function mockCategoryRows() : Promise<CategoryEntity[]> {
    const mapper = new CategoryMapper()

    let categories :any  = await fetch("/testData/categories.json");

    categories = await categories.json();
    categories = categories.results

    categories = categories.map((category: any) => {
        return mapper.toDomain(category)
    })


    return categories
}

export {mockCategoryRows}