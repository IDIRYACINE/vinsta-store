

import { loadCategoriesApi  } from "@vinstacore/api/categoryApi";



import { useAppSelector ,useAppDispatch} from "@vinstacore/store/clientHooks";
import CategoryGrid from "@adminapp/modules/products/manager/components/CategoryGrid";
import { setCategories } from "@vinstacore/store/admin/slices/categoriesSlice";
import { ProductPage } from "@adminapp/modules/products/manager/ui/ProductPage";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";




export default function Page(){

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)
    const categories = useAppSelector(state => selectAdminAllCategories(state))
    const dispatch = useAppDispatch()


    if(categoryId){
        return (
            <ProductPage/>
        )
    }

    loadCategoriesApi().then((res) => {
        dispatch(setCategories(res))
    })


    return (
        <div className="flex justify-center items-center">
            <CategoryGrid/>
        </div>

    )
}

