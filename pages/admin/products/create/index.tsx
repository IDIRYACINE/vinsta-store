import { useAppSelector } from "@vinstacore/store/clientHooks";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";

import { ProductCreator } from "@adminapp/modules/products/editor/ui/ProductCreator";
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";


function CreateProductPage() {
    let categories = useAppSelector(state => selectAdminAllCategories(state))

    useLoadDispatchCategories(true)

    return (<ProductCreator categories={categories} />)
}

export default CreateProductPage