import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstacore";

export interface CategoriesState {
    categories: Repository.Category[];
    editedCategory: Repository.Category | null;
    isModalOpen: boolean;
}


const initialState: CategoriesState = {
    categories: [],
    editedCategory: null,
    isModalOpen: false,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<Repository.Category[]>) {
            state.categories = action.payload;
        },
        setEditedCategory(state, action: PayloadAction<Repository.Category | null>) {
            state.editedCategory = action.payload;
        },
        addCategory(state, action: PayloadAction<Repository.Category>) {
            console.log("addCategory", action.payload);
            state.categories.push(action.payload);
        },
        deleteCategory(state, action: PayloadAction<Repository.Category | null>) {
            const targetCategory = state.editedCategory?? action.payload;
            if(!targetCategory) return;

            state.categories = state.categories.filter((category) => category.id !== targetCategory.id);
            state.editedCategory = null;
            state.isModalOpen = false;
        },
        updateCategory(state, action: PayloadAction<Repository.Category>) {
            const index = state.categories.findIndex((category) => category.id === action.payload.id);
            if (index !== -1) {
                state.categories[index] = action.payload;
            }
        },
        openDeleteCategoryDialog(state, action: PayloadAction<Repository.Category>) {
            state.editedCategory = action.payload;
            state.isModalOpen = true;
        },
        closeDeleteCategoryDialog(state) {
            state.isModalOpen = false;
        }
        

    }
});


export const { setCategories, setEditedCategory, addCategory, deleteCategory, updateCategory } = categoriesSlice.actions;
export const { openDeleteCategoryDialog, closeDeleteCategoryDialog } = categoriesSlice.actions;
export default categoriesSlice.reducer;