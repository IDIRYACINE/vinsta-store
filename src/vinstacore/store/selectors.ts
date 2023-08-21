import { createSelector } from "@reduxjs/toolkit"
import { ProductTreasure } from "./customer/slices/productsSlice"
import { RootState } from "./store"

const selectAdminAllOrders = (state: RootState) => state.adminOrders.orders
const selectAdminOrderId = (param : {orderId :string}) => param.orderId
const selectAdminDisplayedOrderStatus = (state: RootState) => state.adminOrders.selectedOrderStatus

const selectAdminAllCategories = (state: RootState) => state.adminCategories.categories
const selectAdminEditCategory = (state: RootState) => state.adminCategories.editedCategory

const orderSelector = createSelector([selectAdminAllOrders ,selectAdminOrderId], (orders,orderId) => {
    if(!orderId) return undefined
    
    return orders.find(order => order.header.id === orderId)
})

const orderHeaderSelector = createSelector([selectAdminAllOrders,selectAdminDisplayedOrderStatus],(orders,orderStatus) => {
    return orders
    .filter(order => order.header.status === orderStatus.name)
    .map(order => order.header)
})


const selectAllCustomerProducts = (state: RootState) => state.customerProducts.products
const selectCustomerDisplayedCategory = (state: RootState) => state.customerProducts.displayedCategory
const selectCustomerAllCategories = (state: RootState) => state.customerProducts.categories
const selectCustomerCartItems = (state: RootState) => state.customerOrders.cart
const selectCustomerCartPrice = (state: RootState) => state.customerOrders.totalPrice

const categoryProductsSelector = createSelector([selectAllCustomerProducts, selectCustomerDisplayedCategory], (allProducts, displayedCategoryId) => {
    const products: ProductTreasure[] = allProducts.filter(products => products.categoryId === displayedCategoryId)
    const notEmpty: boolean = products.length !== 0
    return notEmpty ? products[0].products : []
})

const activeCategorySelector = createSelector([selectCustomerAllCategories], (categories) => {
    return categories
        .filter(category => category.productCount > 0)
})

const displayedProductsSelector = createSelector([selectAllCustomerProducts, selectCustomerDisplayedCategory], (products, displayedCategory) => {
    const filteredProducts = products
        .filter(categoryProducts => categoryProducts.categoryId === displayedCategory)

    const isEmpty = filteredProducts.length === 0

    return isEmpty ? [] : filteredProducts[0].products
})

const cartItemsCountSelector = createSelector([selectCustomerCartItems], (cartItems) => {
    return cartItems.length
})

export { categoryProductsSelector,cartItemsCountSelector, activeCategorySelector, displayedProductsSelector }
export {selectCustomerCartItems}
export {orderSelector,selectCustomerCartPrice,orderHeaderSelector,selectAdminAllCategories,selectAdminEditCategory}