import { CategoryEntity } from "vinstacore/src";
import router from "next/dist/client/router";

 class CategoryTableController{

    constructor(){

    }

    public deleteCategory(category: CategoryEntity){

    }

    public editCategory(category: CategoryEntity){
        router.push(`/admin/categories/edit/${category.id.value}`)
    }

    public createCategory(){
        router.push(`/admin/categories/create`)

    }
}

export {CategoryTableController}