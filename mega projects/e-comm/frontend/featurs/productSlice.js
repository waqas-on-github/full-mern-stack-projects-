import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: false,
    loading: false,
    error: false
  };


  const dataSlice = createSlice({
     name : "data" , 
     initialState , 
     reducers : {
   
        fetchDataStart : (state ) =>  {
            state.loading = true 
            , state.error = false
         } , 

         fetchDataSucess : (state , action) => {
            state.loading =false , 
            state.data = action.payload
         } , 
         fetchDataFailure : (state , action) => {
            state.loading =false , 
            state.error = action.payload

         }





     }
  })
  


export const { fetchDataStart , fetchDataSucess , fetchDataFailure}  = dataSlice.actions





export default dataSlice.reducer