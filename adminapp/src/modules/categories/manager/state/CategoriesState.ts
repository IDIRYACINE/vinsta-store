import { makeAutoObservable } from "mobx";
import { Repository } from "@vinstacore";
import router from "next/navigation";
import { mockCategoryRows } from "../../table";



class CategoriesState {
    

    isModalOpen = false;
    isLoaded = false;
    categories: Repository.Category[] = []
    category: Repository.Category | undefined

    constructor() {
        makeAutoObservable(this)
    }

    openModal() {
        this.isModalOpen = true
    }

    closeModal() {
        this.isModalOpen = false
    }

    setCategories(categories: Repository.Category[]) {
        this.categories = categories
    }

    displayDeleteModal(item: Repository.Category) {
        this.isModalOpen = true;
        this.category = item
    }

    deleteCategory() {
        if (this.category === undefined) return;


        const index = this.categories.findIndex(category => category.id === (this.category as Repository.Category).id);

        if (index !== -1) {
            this.categories.splice(index, 1);
        }


    }

    addCategory(category: Repository.Category) {
        this.categories.push(category)
    }

    updateCategory(category: Repository.Category) {
        if(this.category === undefined) return

        const index = this.categories.findIndex(category => category.id === (this.category as Repository.Category).id);

        if (index !== -1) {
            this.categories[index] = category;
        }
    }

    editCategory(item: Repository.Category) {
        this.category = item
       
    }

    loadMockCategories() {
        if (!this.isLoaded)
            mockCategoryRows().then((res) => {
                this.isLoaded = true
                this.setCategories(res)
            })
    }



}

export { CategoriesState }