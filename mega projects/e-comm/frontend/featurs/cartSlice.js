import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  
   UiItemCount : 0

}


const cartSlice =  createSlice ({ 

   name : "cart" , 
   initialState , 
   
   reducers : {
  
   // set fetchd items count to uilengt
   setUicount : (state  , action) => {
      state.UiItemCount = action.payload
   } , 
   updateuicount : (state , action ) => {
     
      state.UiItemCount += action.payload
   }  
, 
   deleteCart : (state )  =>{
      state.UiItemCount = 0
   }, 

   deletItem : (state, action) => {
      state.UiItemCount -= action.payload
   }


   }  


})


export const {setUicount , updateuicount , deletItem , deleteCart} = cartSlice.actions

export default cartSlice.reducer