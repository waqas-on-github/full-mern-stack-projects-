import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './featurs/productSlice'
export const store = configureStore({
  reducer: {
   data :  dataReducer

  },
})