import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstacore/index";

export interface ProductsState {
    products: Repository.Product[];
    editedProduct: Repository.Product | null;
    displayedCategoryId : number | null | string,
    isModalOpen: boolean;
}


const initialState: ProductsState = {
    products: [],
    editedProduct: null,
    displayedCategoryId : null,
    isModalOpen: false,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Repository.Product[]>) {
            state.products = action.payload;
        },
        setEditedProduct(state, action: PayloadAction<Repository.Product | null>) {
            state.editedProduct = action.payload;
        },
        addProduct(state, action: PayloadAction<Repository.Product>) {
            state.products.push(action.payload);
        },
        deleteProduct(state, action: PayloadAction<Repository.Product | null>) {
            const targetProduct = state.editedProduct ?? action.payload;
            if (!targetProduct) return;
            state.products = state.products.filter((product) => product.id !== targetProduct.id);
        },
        updateProduct(state, action: PayloadAction<Repository.Product>) {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        setDisplayedCategory(state ,action:PayloadAction<number |string| null>){
            state.displayedCategoryId = action.payload;
        },
        openDeleteProductDialog(state, action: PayloadAction<Repository.Product>) {
            state.editedProduct = action.payload;
            state.isModalOpen = true;
        },
        closeDeleteProductDialog(state) {
            state.isModalOpen = false;
        }
    }
});

export const { setProducts, setEditedProduct, addProduct, deleteProduct, setDisplayedCategory,updateProduct } = productsSlice.actions;
export const { openDeleteProductDialog, closeDeleteProductDialog } = productsSlice.actions;
export default productsSlice.reducer;