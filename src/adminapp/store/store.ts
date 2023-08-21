import { configureStore } from '@reduxjs/toolkit'

import ordersReducer from './slices/ordersSlice'
import productsReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'
import navigationReducer from './slices/navigationSlice'

import { categoriesApi } from './services/categoriesApi'
import { productsApi } from './services/productsApi'


export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products : productsReducer,
    categories : categoriesReducer,
    navigation : navigationReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

