import { store ,ProductEditor } from "@vinstastore/vinstaadmin";
import { loadCategoriesApi} from "@vinstastore/vinstacore";


async function EditProductPage(){

    let categories = store.getState().categories.categories
    if (categories.length == 0) {

        categories = (await loadCategoriesApi()) 

        store.dispatch({ type: "categories/setCategories", payload: categories })
    }


    return (<ProductEditor categories={store.getState().categories.categories} />)
}

export default EditProductPage