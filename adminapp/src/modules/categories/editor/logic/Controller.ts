
import { Repository ,navigateReplace,AdminRoutes} from "@vinstacore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";


interface createCategoryOptions {
    name: string,
    description?: string,
    imageUrl: string,
    code: string,
}

export class CategoryEditorController {



    public cancel() {


    }

    public createCategory(options: createCategoryOptions): Repository.Category {
        let category = {
            productCount: 0,
            id: options.code,
            name: options.name,
            imageUrl: options.imageUrl,
            description: options.description
        }


        return category

    }

    public updateCategory(options: createCategoryOptions): Repository.Category {
        let category = {
            productCount: 0,
            id: options.code,
            name: options.name,
            imageUrl: options.imageUrl,
            description: options.description
        }


        return category

    }

}


export function goBack(router:AppRouterInstance){
    navigateReplace(router,AdminRoutes.categories)
}

