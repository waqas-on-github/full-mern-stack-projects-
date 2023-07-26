import { configureStore } from '@reduxjs/toolkit'
import   productreducer from './slices/productslice.js'

export const store = configureStore({
  reducer: { 
    productreducer,
  }
})