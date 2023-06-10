import { OrderStatus, orderStatusfromString } from "@adminapp/modules/orders/domain/OrderStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {  Repository } from "@vinstacore";

export interface OrdersState {
    orders: Repository.Order[];
    editedOrder: Repository.Order | null;
    selectedOrderStatus : OrderStatus;
}


const initialState: OrdersState = {
    orders: [],
    editedOrder: null,
    selectedOrderStatus : orderStatusfromString("confirmed")
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrders(state, action: PayloadAction<Repository.Order[]>) {
            state.orders = action.payload;
        },
        setEditedOrder(state, action: PayloadAction<Repository.Order | null>) {
            state.editedOrder = action.payload;
        },
        setSelectedOrderStatus(state, action: PayloadAction<OrderStatus>) {
            state.selectedOrderStatus = action.payload;
        }
        ,
        addOrder(state, action: PayloadAction<Repository.Order>) {
            state.orders.push(action.payload);
        }
        ,
        removeOrder(state, action: PayloadAction<Repository.Order>) {
            state.orders = state.orders.filter((order) => order.header.id !== action.payload.header.id);
        },
        updateOrder(state, action: PayloadAction<Repository.Order>) {
            const index = state.orders.findIndex((order) => order.header.id === action.payload.header.id);
            if (index !== -1) {
                state.orders[index] = action.payload;
            }
        }

    }
});

export const { setOrders,setSelectedOrderStatus, setEditedOrder, addOrder, removeOrder, updateOrder } = ordersSlice.actions;
export default ordersSlice.reducer;