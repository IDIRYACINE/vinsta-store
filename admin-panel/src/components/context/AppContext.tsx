import { ReactNode,createContext } from 'react';
import NavigationState from '@admin/components/navigation/sidebar/state/State';
import { CategoriesState } from '@admin/modules/categories/manager/state/CategoriesState';
import { ProductsState } from '@admin/modules/products/manager/state/ProductsState';


interface AdminContextValues {
    navState: NavigationState
    categoriesState : CategoriesState,
    productsState : ProductsState
}

const intialValue : AdminContextValues = {
    navState: new NavigationState(),
    categoriesState : new CategoriesState(),
    productsState : new ProductsState()
}

const AdminAppContext = createContext(intialValue);

interface AdminContextProps {
    children: ReactNode;
}

function AdminContextProvider({children} : AdminContextProps) {

    return (
        <AdminAppContext.Provider value={intialValue}>
            {children}
        </AdminAppContext.Provider>
    )
}



export {AdminContextProvider , AdminAppContext}