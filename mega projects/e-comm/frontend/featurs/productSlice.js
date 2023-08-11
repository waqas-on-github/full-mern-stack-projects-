import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: undefined,
    loading: false,
    error: undefined
  };


  const dataSlice = createSlice({
     name : "data" , 
     initialState , 
     reducers : {
   
        fetchDataStart : (state ) =>  {
            state.loading = true 
            , state.error = undefined
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