import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstacore";

export interface cartState {
    cart: Repository.Product[];
    editedItem: Repository.Product | null;
    isModalOpen: boolean;
}


const initialState: cartState = {
    cart: [],
    editedItem: null,
    isModalOpen: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<Repository.Product[]>) {
            state.cart = action.payload;
        },
        
        addItem(state, action: PayloadAction<Repository.Product>) {
            state.cart.push(action.payload);
        }
        ,
        removeItem(state, action: PayloadAction<Repository.Product | null>) {
            const targetItem = state.editedItem?? action.payload;
            if(!targetItem) return;

            state.cart = state.cart.filter((item) => item.id !== targetItem.id);
        },
        updateItem(state, action: PayloadAction<Repository.Product>) {
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.cart[index] = action.payload;
            }
        },
        openItemDialog(state, action: PayloadAction<Repository.Product>) {
            state.editedItem = action.payload;
            state.isModalOpen = true;
        },
        closeItemDialog(state) {
            state.isModalOpen = false;
            state.editedItem = null
        }
      

    }
});

export const { setCart, openItemDialog,closeItemDialog, addItem, removeItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;