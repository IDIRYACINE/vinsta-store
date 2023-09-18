
import { ProductCreator } from "@adminapp/components/products/editor/ui/ProductCreator";
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";
import { CircularProgress } from "@mui/material";


function CreateProductPage() {

    const {isLoading,data,error} = useLoadDispatchCategories(true)

    return isLoading? <div className="flex flex-row justify-center items-center"><CircularProgress/></div> : <ProductCreator categories={data??[]} />
    
}

export default CreateProductPage