import { useAppSelector, useAppDispatch } from "@adminapp/store/clientHooks";
import { setCategories } from "@adminapp/store/slices/categoriesSlice";
import { useEffect } from "react";
import { loadCategoriesApi } from "@vinstacore/api/categoryApi";
import { ProductCreator } from "@adminapp/modules/products/editor/ui/ProductCreator";


function CreateProductPage() {
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

    return (<ProductCreator categories={categories} />)
}

export default CreateProductPage