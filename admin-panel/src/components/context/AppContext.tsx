import { ReactNode,createContext } from 'react';
import NavigationState from '@admin/components/navigation/sidebar/logic/State';


interface AdminContextValues {
    navState: NavigationState
}

const intialValue : AdminContextValues = {
    navState: new NavigationState(),
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