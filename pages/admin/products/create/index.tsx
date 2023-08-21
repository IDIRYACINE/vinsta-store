import { useAppSelector, useAppDispatch } from "@vinstacore/store/clientHooks";
import { setCategories } from "@vinstacore/store/admin/slices/categoriesSlice";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";

import { useEffect } from "react";
import { loadCategoriesApi } from "@vinstacore/api/categoryApi";
import { ProductCreator } from "@adminapp/modules/products/editor/ui/ProductCreator";


function CreateProductPage() {
    const dispatch = useAppDispatch()
    let categories = useAppSelector(state => selectAdminAllCategories(state))

    useEffect(() => {
        if (categories.length === 0) {
            loadCategoriesApi().then((res) => {
                if (res.length !== 0) {
                    dispatch(setCategories(res))
                }
            })
        }
    }, [
        categories, dispatch
    ])

    return (<ProductCreator categories={categories} />)
}

export default CreateProductPage