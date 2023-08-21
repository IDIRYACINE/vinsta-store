import { ProductEditor } from "@adminapp/modules/products/editor/ui/ProductEditor";
import { useAppSelector, useAppDispatch } from "@vinstacore/store/clientHooks";
import { setCategories } from "@vinstacore/store/admin/slices/categoriesSlice";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";

import { loadCategoriesApi} from "@vinstacore/api/categoryApi";
import { useEffect } from "react";


function EditProductPage() {
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




    return (<ProductEditor categories={categories} />)
}

export default EditProductPage