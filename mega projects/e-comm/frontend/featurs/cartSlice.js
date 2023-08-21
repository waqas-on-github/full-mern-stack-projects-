import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  
    fetchedProducts : [] , 
    localProducts : []



}


const cartSlice =  createSlice ({ 

   name : "cart" , 
   initialState , 
   
   reducers : {
    addlocalProduct : (state , action) => {
        state.localProducts.push(action.payload)
    }
   }


})


export const {addlocalProduct} = cartSlice.actions

export default cartSlice.reducer