

import { loadCategoriesApi  } from "@vinstacore/api/categoryApi";

import  Preloader from "@adminapp/store/Preloader"


import { useAppSelector ,useAppDispatch} from "@adminapp/store/clientHooks";
import CategoryGrid from "@adminapp/modules/products/manager/components/CategoryGrid";
import { setCategories } from "@adminapp/store/slices/categoriesSlice";
import { ProductPage } from "@adminapp/modules/products/manager/ui/ProductPage";





export default function Page(){

    const categoryId = useAppSelector(state => state.products.displayedCategoryId)
    const categories = useAppSelector(state => state.categories.categories)
    const dispatch = useAppDispatch()


    if(categoryId){
        return (
            <ProductPage/>
        )
    }

    loadCategoriesApi().then((res) => {
        dispatch(setCategories(res))
    })


    const preloaderProps = {
        categories: categories,
    }

    return (
        <div className="flex justify-center items-center">
            <Preloader {...preloaderProps} />
            <CategoryGrid/>
        </div>

    )
}

