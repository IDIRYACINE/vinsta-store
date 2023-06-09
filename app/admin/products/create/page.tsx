import { ProductCreator } from "@adminapp"
import { store ,loadCategoriesApi} from "@adminapp"


async function CreateProductPage() {

    let categories = store.getState().categories.categories
    if (categories.length == 0) {

        categories = (await loadCategoriesApi()) 

        store.dispatch({ type: "categories/setCategories", payload: categories })
    }


    return (<ProductCreator categories={store.getState().categories.categories} />)
}

export default CreateProductPage