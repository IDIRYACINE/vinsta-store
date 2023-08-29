import { useAppSelector } from "@vinstacore/store/clientHooks";
import CategoryGrid from "@adminapp/modules/products/manager/components/CategoryGrid";
import { ProductPage } from "@adminapp/modules/products/manager/ui/ProductPage";
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";
import { CircularProgress } from "@mui/material";




export default function Page() {

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)

    const {isLoading,data,error} = useLoadDispatchCategories(true)


    let Widget = categoryId ? ProductPage : CategoryGrid



    return isLoading? <CircularProgress/> : <Widget/>
}

