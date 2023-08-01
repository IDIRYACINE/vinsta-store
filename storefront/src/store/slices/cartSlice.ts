import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstacore";

export interface cartState {
    cart: Repository.OrderItem[];
    editedItem: Repository.OrderItem | null;
    isModalOpen: boolean;
    totalPrice: number,
    orderId: string | null
}


const initialState: cartState = {
    cart: [],
    editedItem: null,
    isModalOpen: false,
    totalPrice: 0,
    orderId: ""
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<Repository.OrderItem[]>) {
            state.cart = action.payload;

            for (let product of action.payload as Repository.OrderItem[]) {
                state.totalPrice += product.price
            }
        },

        addItem(state, action: PayloadAction<Repository.OrderItem>) {
            state.cart.push(action.payload);
            state.totalPrice += action.payload.price
        }
        ,
        removeItem(state, action: PayloadAction<Repository.OrderItem | null>) {
            const targetItem = state.editedItem ?? action.payload;
            if (!targetItem) return;

            state.cart = state.cart.filter((item) => item.productId !== targetItem.productId);
            state.totalPrice -= targetItem.price

        },
        updateItem(state, action: PayloadAction<Repository.OrderItem>) {
            const index = state.cart.findIndex((item) => item.productId === action.payload.productId);
            if (index !== -1) {
                state.cart[index] = action.payload;
            }
        },

        updateOrderId(stae, action: PayloadAction<string | null>) {
            stae.orderId = action.payload;
        },

        openItemDialog(state, action: PayloadAction<Repository.OrderItem>) {
            state.editedItem = action.payload;
            state.isModalOpen = true;
        },
        closeItemDialog(state) {
            state.isModalOpen = false;
            state.editedItem = null
        }


    }
});

export const { setCart, updateOrderId, openItemDialog, closeItemDialog, addItem, removeItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;