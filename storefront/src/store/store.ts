import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import navigationReducer from './slices/navigationSlice'

import { categoriesApi } from './services/categoriesApi'
import { productsApi } from './services/productsApi'


export const store = configureStore({
  reducer: {
    orders: cartReducer,
    products : productsReducer,
    navigation : navigationReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

