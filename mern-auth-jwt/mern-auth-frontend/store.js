import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import authReducer from './slices/authsclice'

 const store = configureStore({
  reducer: { auth : authReducer},
  middleware : (getDefaultMiddleware) =>(getDefaultMiddleware()),
  devTools:true 
})

export {
    store
}