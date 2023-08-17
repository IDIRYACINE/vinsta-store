import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "./store"

const selectAllOrders = (state: RootState) => state.orders.orders
const selectOrderId = (param : {orderId :string}) => param.orderId
const selectDisplayedOrderStatus = (state: RootState) => state.orders.selectedOrderStatus

const orderSelector = createSelector([selectAllOrders ,selectOrderId], (orders,orderId) => {

    return orders.find(order => order.header.id === orderId)
})

const orderHeaderSelector = createSelector([selectAllOrders,selectDisplayedOrderStatus],(orders,orderStatus) => {
    return orders
    .filter(order => order.header.status === orderStatus.name)
    .map(order => order.header)
})


export {orderSelector,orderHeaderSelector}