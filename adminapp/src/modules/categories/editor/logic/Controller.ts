
import { Repository } from "@vinstacore";


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
