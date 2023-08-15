import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './featurs/productSlice'
import authReducer from './featurs/authSlice'
export const store = configureStore({
  reducer: {
   data :  dataReducer,
   auth : authReducer

  },
})