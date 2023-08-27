import { OrderStatus, orderStatusfromString } from "@adminapp/modules/orders/domain/OrderStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { orderDateIdFromDate, Repository } from "@vinstacore/index";

export interface OrdersState {
    orders: {[key:string] : Repository.Order[]};
    editedOrder: Repository.Order | null;
    displayedDateId: string|null;
    selectedOrderStatus: OrderStatus;
    isModalOpen: boolean;
}


const initialState: OrdersState = {
    orders: {},
    editedOrder: null,
    displayedDateId: null,
    isModalOpen: false,
    selectedOrderStatus: orderStatusfromString("confirmed")
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrders(state, action: PayloadAction<Repository.OrderTreasure[]>) {
            const orders = {};
            action.payload.forEach((treasure) => {
                orders[treasure.id] = treasure.orders;
            })

            state.orders = orders
        },
        setEditedOrder(state, action: PayloadAction<Repository.Order | null>) {
            state.editedOrder = action.payload;
        },
        setSelectedOrderStatus(state, action: PayloadAction<OrderStatus>) {
            state.selectedOrderStatus = action.payload;
        }
        ,
        addOrder(state, action: PayloadAction<Repository.Order>) {
            const orderDateId = orderDateIdFromDate(action.payload.header.createdAt);
            state.orders[orderDateId].push(action.payload);
        }
        ,
        removeOrder(state, action: PayloadAction<Repository.Order>) {
            const orderDateId = orderDateIdFromDate(action.payload.header.createdAt);

            state.orders[orderDateId]  = state.orders[orderDateId].filter((order) => order.header.id !== action.payload.header.id);
        },
        updateOrder(state, action: PayloadAction<Repository.Order>) {
            const orderDateId = orderDateIdFromDate(action.payload.header.createdAt);

            const index = state.orders[orderDateId].findIndex((order) => order.header.id === action.payload.header.id);
            if (index !== -1) {
                state.orders[orderDateId][index] = action.payload;
            }
        },
        openUpdateOrderStatusModal(state, action: PayloadAction<Repository.Order>) {
            state.editedOrder = action.payload;
            state.isModalOpen = true;
        }
        ,
        closeUpdateOrderStatusModal(state) {
            state.isModalOpen = false;
        },
        updateOrderStatus(state, action: PayloadAction<OrderStatus>) {
            const editedOrder = state.editedOrder
            const orderDateId = state.displayedDateId??"";

            console.log(state.orders[orderDateId])
            const index = state.orders[orderDateId].findIndex((order) => order.header.id === editedOrder?.header.id);
            if (index !== -1) {
                state.orders[orderDateId][index].header.status = action.payload.name;
            }
        },
        setOrderDateId(state, action: PayloadAction<string|null>) {
            state.displayedDateId = action.payload;
        },
        deleteOrdersSegment(state, ) {
            const orderDateId = state.displayedDateId!;
            delete state.orders[orderDateId];
            state.displayedDateId = null;
        },
        restockOrder(state,action: PayloadAction<String>){
            const orderDateId = state.displayedDateId!;
            const orderId = action.payload;
            const index = state.orders[orderDateId].findIndex((order) => order.header.id === orderId);
            if (index !== -1) {
                state.orders[orderDateId][index].header.restock = true;
            }
        }

    }
});

export const { setOrders,restockOrder, setSelectedOrderStatus, setEditedOrder, addOrder, removeOrder, updateOrder } = ordersSlice.actions;
export const { closeUpdateOrderStatusModal,deleteOrdersSegment,setOrderDateId, openUpdateOrderStatusModal,updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;