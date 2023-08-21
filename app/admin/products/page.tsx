export const revalidate = 1800

import { ProductManagerPage } from "@vinstastore/vinstaadmin";
import { loadCategoriesApi  } from "@vinstastore/vinstacore";

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