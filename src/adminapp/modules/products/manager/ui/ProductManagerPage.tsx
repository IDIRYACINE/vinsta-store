'use client'


import { useAppSelector ,} from "@adminapp/store/clientHooks";
import  CategoryGrid  from "../components/CategoryGrid";
import { ProductPage } from "./ProductPage";

function ProductManagerPage() {


    const categoryId = useAppSelector(state => state.products.displayedCategoryId)


    if(categoryId){
        return (
            <ProductPage/>
        )
    }


    return (
        <CategoryGrid/>
    )
}



export { ProductManagerPage  }



