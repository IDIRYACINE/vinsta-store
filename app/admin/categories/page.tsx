import { CategoryPage } from "@vinstastore/vinstaadmin";
import { panels, setCategories, store } from "adminapp/src/store"
import Preloader from "adminapp/src/store/Preloader"



async function Page() {


    const categories = await fetch("http://localhost:3000/api/category")

    const data = (await categories.json()).data

    store.dispatch(setCategories(data))


    const preloaderProps = {
        categories: data,
        products: [],
        orders: [],
        panels: panels,
    }

    return (
        <div>
            <Preloader {...preloaderProps} />
            <CategoryPage data={data} />
        </div>
    )
}

export default Page