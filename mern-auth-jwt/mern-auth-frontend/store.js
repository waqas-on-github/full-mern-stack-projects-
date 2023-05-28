import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './slices/authsclice'
import { apislice } from './slices/apislice'


 const store = configureStore({
  reducer: { 

     [apislice.reducerPath]: apislice.reducer,
      auth : authReducer,
      
          },



  middleware : (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apislice.middleware),
  devTools:true 
})



export {
    store
}