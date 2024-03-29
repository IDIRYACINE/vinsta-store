import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Repository } from "@vinstacore/index";

interface OrderStatePayload {
    orderId: string;
    dateId: string;

}

interface UpdateOrderPayload {
    orderId: string;
    dateId: string;
}

export interface cartState {
    cart: Repository.OrderItem[];
    editedItem: Repository.OrderItem | null;
    isModalOpen: boolean;
    totalPrice: number,
    orderId: string | null,
    dateId: string | null
}


const initialState: cartState = {
    cart: [],
    editedItem: null,
    isModalOpen: false,
    totalPrice: 0,
    dateId:"",
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
            state.isModalOpen = false;

        },
        updateItem(state, action: PayloadAction<Repository.OrderItem>) {
            const index = state.cart.findIndex((item) => item.productId === action.payload.productId);
            if (index !== -1) {
                state.cart[index] = action.payload;
            }
        },

        updateOrderId(state, action: PayloadAction<UpdateOrderPayload>) {
            state.orderId = action.payload.orderId;
            state.dateId = action.payload.dateId;
            state.cart = [];
        },

        openItemDialog(state, action: PayloadAction<Repository.OrderItem>) {
            state.editedItem = action.payload;
            state.isModalOpen = true;
        },
        closeItemDialog(state) {
            state.isModalOpen = false;
            state.editedItem = null
        },
        


    }
});

export const { setCart, updateOrderId, openItemDialog, closeItemDialog, addItem, removeItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;