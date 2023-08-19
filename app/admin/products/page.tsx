export const revalidate = 1800

import { ProductManagerPage,loadCategoriesApi } from "@vinstastore/vinstaadmin";
import Preloader from "adminapp/src/store/Preloader";

async function Page(){


    const categories = await loadCategoriesApi()


    const preloaderProps = {
        categories: categories,
    }

    return (
        <div className="flex justify-center items-center">
            <Preloader {...preloaderProps} />
        <ProductManagerPage/>
        </div>

    )
}

export default Page