import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstastore/vinstacore";

export interface ProductTreasure {
    categoryId: number | string,
    products: Repository.Product[]
}

export interface ProductsState {
    products: ProductTreasure[];
    categories: Repository.Category[];
    displayedProduct: Repository.Product | null;
    displayedCategory: number |string| null,
    isModalOpen: boolean;
}



const initialState: ProductsState = {
    products: [],
    categories: [],
    displayedProduct: null,
    displayedCategory: null,
    isModalOpen: false,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductTreasure>) {
            const index = state.products.findIndex(product => product.categoryId === action.payload.categoryId)
            if (index === -1) {
                state.products.push(action.payload)
            }

        },
        setCategories(state, action: PayloadAction<Repository.Category[]>) {
            state.categories = action.payload;
        },
        setDisplayedProduct(state, action: PayloadAction<Repository.Product | null>) {
            state.displayedProduct = action.payload;
        },
        setDisplayedCategory(state, action: PayloadAction<number | null|string>) {
            state.displayedCategory = action.payload;
        }

    }
});

export const { setProducts, setDisplayedProduct, setCategories, setDisplayedCategory } = productsSlice.actions;
export default productsSlice.reducer;