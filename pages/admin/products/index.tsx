

import { loadCategoriesApi } from "@vinstacore/api/categoryApi";



import { useAppSelector, useAppDispatch } from "@vinstacore/store/clientHooks";
import CategoryGrid from "@adminapp/modules/products/manager/components/CategoryGrid";
import { setCategories } from "@vinstacore/store/admin/slices/categoriesSlice";
import { ProductPage } from "@adminapp/modules/products/manager/ui/ProductPage";
import { useEffect } from 'react';




export default function Page() {

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)
    const dispatch = useAppDispatch()


    useEffect(() => {
        loadCategoriesApi().then((categories) => {
            dispatch(setCategories(categories))
        })
    }, [dispatch])


    if (categoryId) {
        return (
            <ProductPage />
        )
    }

    return (
        <div className="flex justify-center items-center">
            <CategoryGrid />
        </div>

    )
}

