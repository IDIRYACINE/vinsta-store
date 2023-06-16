import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import navigationReducer from './slices/navigationSlice'


export const store = configureStore({
  reducer: {
    orders: cartReducer,
    products : productsReducer,
    navigation : navigationReducer,
   
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

