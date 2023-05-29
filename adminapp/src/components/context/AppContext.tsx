import NavigationState from '@adminapp/components/navigation/sidebar/state/State';
import { CategoriesState } from '@adminapp/modules/categories/manager/state/CategoriesState';
import { ProductsState } from '@adminapp/modules/products/manager/state/ProductsState';


interface AdminContextValues {
    navState: NavigationState
    categoriesState: CategoriesState,
    productsState: ProductsState
}

const adminContext: AdminContextValues = {
    navState: new NavigationState(),
    categoriesState: new CategoriesState(),
    productsState: new ProductsState()
}





export { adminContext }