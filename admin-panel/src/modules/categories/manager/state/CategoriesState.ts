import { makeAutoObservable } from "mobx";
import { CategoryEntity } from "@vinstacore";
import router from "next/dist/client/router";
import { mockCategoryRows } from "../../table";



class CategoriesState {

    isModalOpen = false;
    categories: CategoryEntity[] = []

    constructor() {
        makeAutoObservable(this)
    }

    openModal() {
        this.isModalOpen = true
    }

    closeModal(){
        this.isModalOpen = false
    }

    setCategories(categories: CategoryEntity[]) {
        this.categories = categories
    }

    displayDeleteModal(item: CategoryEntity) {
        this.isModalOpen = true;
        console.log(this.isModalOpen);
    }

    editCategory(item: CategoryEntity) {
        router.push(`/admin/categories/edit/${item.id.value}`)

    }

    loadMockCategories(){
        mockCategoryRows().then((res) => {
            this.setCategories(res)
        })
    }



}

export { CategoriesState }