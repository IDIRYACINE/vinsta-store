import { ProductEditor } from "@adminapp/components/products/editor/ui/ProductEditor";

import { useLoadDispatchCategories } from "@vinstacore/sdk/useCategory";
import { CircularProgress } from "@mui/material";


function EditProductPage() {

    const {isLoading,data,error} = useLoadDispatchCategories(true)

    return isLoading? <div className="flex flex-row justify-center items-center"><CircularProgress/></div> : <ProductEditor categories={data??[]} />

}

export default EditProductPage