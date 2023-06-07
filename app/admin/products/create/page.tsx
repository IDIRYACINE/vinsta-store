import { ProductCreator } from "@adminapp"
import { store ,loadCategoriesApi} from "@adminapp"


async function CreateProductPage() {

    let categories = store.getState().categories.categories
    if (categories.length == 0) {

        // categories = (await loadCategoriesApi()) an issue with nextJs cache
        categories = [
            {
              description: 'good',
              id: '1',
              name: 'kitty',
              imageUrl: 'https://images.freeimages.com/images/large-previews/bb0/cat-in-window-1218032.jpg',
              productCount: 1
            },
            {
              id: '233',
              imageUrl: 'https://images.freeimages.com/images/large-previews/bb0/cat-in-window-1218032.jpg',
              productCount: 0,
              name: 'ggg'
            }
          ]

        store.dispatch({ type: "categories/setCategories", payload: categories })
    }


    return (<ProductCreator categories={store.getState().categories.categories} />)
}

export default CreateProductPage