import { configureStore } from '@reduxjs/toolkit'
import authReducer from './featurs/authSlice'
import cartReducer from './featurs/cartSlice'
export const store = configureStore({
  reducer: {
   auth : authReducer , 
   cart : cartReducer
  },
})