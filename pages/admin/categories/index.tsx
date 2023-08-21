
import { loadCategoriesApi } from "@vinstacore/index";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { CategoryPage } from "@adminapp/modules/categories/manager/ui/CategoryPage";
import { setCategories } from "@vinstacore/store/admin/slices/categoriesSlice";


export default function Page() {

    const dispatch = useAppDispatch()


    loadCategoriesApi().then((categories) => {
        dispatch(setCategories(categories))
    })



    return (
        <div>
            <CategoryPage />
        </div>
    )
}

