import { useAppSelector } from "@vinstacore/store/clientHooks";
import CategoryGrid from "@adminapp/components/products/manager/components/CategoryGrid";
import { ProductPage } from "@adminapp/components/products/manager/ui/ProductPage";
import { useLoadDispatchCategories } from "@vinstacore/sdk/useCategory";
import { CircularProgress } from "@mui/material";




export default function Page() {

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)

    const {isLoading,data,error} = useLoadDispatchCategories(true)


    let Widget = categoryId ? ProductPage : CategoryGrid



    return isLoading? <div className="flex flex-row justify-center items-center"><CircularProgress/></div> : <Widget/>
}

