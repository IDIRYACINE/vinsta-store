
import { Repository ,navigateReplace,AdminRoutes} from "@vinstacore/index";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";


interface CreateCategoryOptions {
    name: string,
    description?: string,
    imageUrl: string,
    code: string,
} 

interface UpdateCategoryOptions {
    name: string,
    description?: string,
    imageUrl: string,
    code: string,
    productCount: number
} 

export class CategoryEditorController {



    public createCategory(options: CreateCategoryOptions): Repository.Category {
        let category = {
            productCount: 0,
            id: options.code,
            name: options.name,
            imageUrl: options.imageUrl,
            description: options.description
        }


        return category

    }

    public updateCategory(options: UpdateCategoryOptions): Repository.Category {
        let category = {
            id: options.code,
            name: options.name,
            imageUrl: options.imageUrl,
            description: options.description,
            productCount: options.productCount
        }


        return category

    }

}


export function goBack(router:AppRouterInstance){
    navigateReplace(router,AdminRoutes.categories)
}

