import { makeAutoObservable } from "mobx";
import { CategoryEntity, CategoryId } from "@vinstacore";
import router from "next/dist/client/router";
import { mockCategoryRows } from "../../table";



class CategoriesState {
    

    isModalOpen = false;
    isLoaded = false;
    categories: CategoryEntity[] = []
    category: CategoryEntity | undefined

    constructor() {
        makeAutoObservable(this)
    }

    openModal() {
        this.isModalOpen = true
    }

    closeModal() {
        this.isModalOpen = false
    }

    setCategories(categories: CategoryEntity[]) {
        this.categories = categories
    }

    displayDeleteModal(item: CategoryEntity) {
        this.isModalOpen = true;
        this.category = item
    }

    deleteCategory() {
        if (this.category === undefined) return;


        const index = this.categories.findIndex(category => category.equals(this.category as CategoryEntity));

        if (index !== -1) {
            this.categories.splice(index, 1);
        }


    }

    addCategory(category: CategoryEntity) {
        this.categories.push(category)
    }

    updateCategory(category: CategoryEntity) {
        if(this.category === undefined) return

        const index = this.categories.findIndex(category => category.equals(this.category as CategoryEntity));

        if (index !== -1) {
            this.categories[index] = category;
        }
    }

    editCategory(item: CategoryEntity) {
        this.category = item
        router.push(`/admin/categories/edit/${item.id.value}`)

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