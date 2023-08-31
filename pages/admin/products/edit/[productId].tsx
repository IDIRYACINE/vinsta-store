import { ProductEditor } from "@adminapp/modules/products/editor/ui/ProductEditor";
import { useAppSelector } from "@vinstacore/store/clientHooks";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";

import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";
import { CircularProgress } from "@mui/material";


function EditProductPage() {
    let categories = useAppSelector(state => selectAdminAllCategories(state))

    const {isLoading,data,error} = useLoadDispatchCategories(true)

    return isLoading? <div className="flex flex-row justify-center items-center"><CircularProgress/></div> : <ProductEditor categories={categories} />

}

export default EditProductPage