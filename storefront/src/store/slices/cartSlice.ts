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
        setcart(state, action: PayloadAction<Repository.Product[]>) {
            state.cart = action.payload;
        },
        
        addItem(state, action: PayloadAction<Repository.Product>) {
            state.cart.push(action.payload);
        }
        ,
        removeItem(state, action: PayloadAction<Repository.Product>) {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        updateItem(state, action: PayloadAction<Repository.Product>) {
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.cart[index] = action.payload;
            }
        },
      

    }
});

export const { setcart,  addItem, removeItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;