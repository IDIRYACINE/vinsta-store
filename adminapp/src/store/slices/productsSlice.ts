import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstacore";

export interface ProductsState {
    products: Repository.Product[];
    editedProduct: Repository.Product | null;
    editedCategoryId : number | null,
    isModalOpen: boolean;
}


const initialState: ProductsState = {
    products: [],
    editedProduct: null,
    editedCategoryId : null,
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
        openDeleteProductDialog(state, action: PayloadAction<Repository.Product>) {
            state.editedProduct = action.payload;
            state.isModalOpen = true;
        },
        closeDeleteProductDialog(state) {
            state.isModalOpen = false;
        }
    }
});

export const { setProducts, setEditedProduct, addProduct, deleteProduct, updateProduct } = productsSlice.actions;
export const { openDeleteProductDialog, closeDeleteProductDialog } = productsSlice.actions;
export default productsSlice.reducer;