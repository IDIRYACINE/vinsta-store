import { ProductEditor } from "@adminapp/modules/products/editor/ui/ProductEditor";
import { useAppSelector } from "@vinstacore/store/clientHooks";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";

import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";


function EditProductPage() {
    let categories = useAppSelector(state => selectAdminAllCategories(state))

    
    useLoadDispatchCategories(true)




    return (<ProductEditor categories={categories} />)
}

export default EditProductPage