import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstacore";

export interface ProductsState {
    products: Map<number,Repository.Product[]>;
    categories: Repository.Category[];
    displayedProduct: Repository.Product | null;
    displayedCategory : number | null,
    isModalOpen: boolean;
}


const initialState: ProductsState = {
    products: new Map<number,Repository.Product[]>(),
    categories: [],
    displayedProduct: null,
    displayedCategory : null,
    isModalOpen: false,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Map<number,Repository.Product[]>>) {
            state.products = action.payload;
        },
        setCategories(state, action: PayloadAction<Repository.Category[]>) {
            state.categories = action.payload;
        },
        setDisplayedProduct(state, action: PayloadAction<Repository.Product | null>) {
            state.displayedProduct = action.payload;
        },
        setDisplayedCategory(state, action: PayloadAction<number | null>) {
            state.displayedCategory = action.payload;
        }
        
    }
});

export const { setProducts, setDisplayedProduct,setCategories,setDisplayedCategory  } = productsSlice.actions;
export default productsSlice.reducer;