export const revalidate = 0
export const dynamic = 'force-dynamic'

import { CategoryPage } from "@adminapp/index";
import {loadCategoriesApi } from "@vinstacore/index";
import  Preloader from "@adminapp/store/Preloader"



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