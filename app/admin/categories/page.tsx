import { CategoryPage } from "@adminapp"

async function Page(){

    const categories = await fetch("http://localhost:3000/api/category")

    const data = (await categories.json()).data
    console.log(data)

    return (
        <CategoryPage data={data}/>
    )
}

export default Page