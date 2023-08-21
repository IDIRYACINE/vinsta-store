export const revalidate = 1800
export const dynamic = 'force-dynamic'

import { ProductManagerPage } from "@adminapp/index";
import { loadCategoriesApi  } from "@vinstacore/index";

import  Preloader from "@adminapp/store/Preloader"

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