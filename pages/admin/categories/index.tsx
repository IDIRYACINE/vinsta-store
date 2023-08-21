
import { loadCategoriesApi } from "@vinstacore/index";
import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { CategoryPage } from "@adminapp/modules/categories/manager/ui/CategoryPage";
import { setCategories } from "@vinstacore/store/admin/slices/categoriesSlice";

import { useEffect } from 'react';

export default function Page() {

    const dispatch = useAppDispatch()

    useEffect(() => {

        loadCategoriesApi().then((categories) => {
            dispatch(setCategories(categories))
        })
    }, [dispatch])


    return (
        <div>
            <CategoryPage />
        </div>
    )
}

