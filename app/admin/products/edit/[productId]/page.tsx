import { ProductEditor } from "@vinstastore/vinstaadmin";
import { store ,loadCategoriesApi} from "@vinstastore/vinstaadmin";


async function EditProductPage(){

    let categories = store.getState().categories.categories
    if (categories.length == 0) {

        categories = (await loadCategoriesApi()) 

        store.dispatch({ type: "categories/setCategories", payload: categories })
    }


    return (<ProductEditor categories={store.getState().categories.categories} />)
}

export default EditProductPage