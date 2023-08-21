import { configureStore } from '@reduxjs/toolkit'

import adminOrdersReducer from './admin/slices/ordersSlice'
import adminProductsReducer from './admin/slices/productsSlice'
import adminCategoriesReducer from './admin/slices/categoriesSlice'
import adminNavigationReducer from './admin/slices/navigationSlice'

import customerCartReducer from './customer/slices/cartSlice'
import customerProductsReducer from './customer/slices/productsSlice'
import customernNavigationReducer from './customer/slices/navigationSlice'


export const store = configureStore({
  reducer: {
    adminOrders: adminOrdersReducer,
    adminProducts : adminProductsReducer,
    adminCategories : adminCategoriesReducer,
    adminNavigation : adminNavigationReducer,
    customerOrders: customerCartReducer,
    customerProducts : customerProductsReducer,
    customerNavigation : customernNavigationReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

