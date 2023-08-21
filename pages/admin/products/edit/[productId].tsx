import { ProductEditor } from "@adminapp/modules/products/editor/ui/ProductEditor";
import { useAppSelector, useAppDispatch } from "@adminapp/store/clientHooks";
import { setCategories } from "@adminapp/store/slices/categoriesSlice";
import { loadCategoriesApi} from "@vinstacore/api/categoryApi";
import { useEffect } from "react";


function EditProductPage() {
    const dispatch = useAppDispatch()
    let categories = useAppSelector(state => state.categories.categories)

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