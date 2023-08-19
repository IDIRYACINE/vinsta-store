export const revalidate = 0

import { CategoryPage, loadCategoriesApi } from "@vinstastore/vinstaadmin";
import Preloader from "adminapp/src/store/Preloader"



async function Page() {


    const categories = await loadCategoriesApi()



    const preloaderProps = {
        categories: categories,
    }

    return (
        <div>
            <Preloader {...preloaderProps} />
            <CategoryPage  />
        </div>
    )
}

export default Page