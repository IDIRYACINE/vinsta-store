export const dynamic = 'force-dynamic'

import { store ,ProductEditor } from "@adminapp/index";
import { loadCategoriesApi} from "@vinstacore/index";


async function EditProductPage(){

    let categories = store.getState().categories.categories
    if (categories.length == 0) {

        categories = (await loadCategoriesApi()) 

        store.dispatch({ type: "categories/setCategories", payload: categories })
    }


    return (<ProductEditor categories={store.getState().categories.categories} />)
}

export default EditProductPage