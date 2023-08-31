import { useAppSelector } from "@vinstacore/store/clientHooks";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";

import { ProductCreator } from "@adminapp/modules/products/editor/ui/ProductCreator";
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";
import { CircularProgress } from "@mui/material";


function CreateProductPage() {
    let categories = useAppSelector(state => selectAdminAllCategories(state))

    const {isLoading,data,error} = useLoadDispatchCategories(true)

    return isLoading? <div className="flex flex-row justify-center items-center"><CircularProgress/></div> : <ProductCreator categories={categories} />
    
}

export default CreateProductPage