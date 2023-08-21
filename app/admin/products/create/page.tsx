import { store,ProductCreator } from "@vinstastore/vinstaadmin";
import { loadCategoriesApi} from "@vinstastore/vinstacore";


async function CreateProductPage() {

    let categories = store.getState().categories.categories
    if (categories.length == 0) {

        categories = (await loadCategoriesApi()) 

        store.dispatch({ type: "categories/setCategories", payload: categories })
    }


    return (<ProductCreator categories={store.getState().categories.categories} />)
}

export default CreateProductPage