import { configureStore } from '@reduxjs/toolkit'

import ordersReducer from './slices/ordersSlice'
import productsReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'
import navigationReducer from './slices/navigationSlice'

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products : productsReducer,
    categories : categoriesReducer,
    navigation : navigationReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

