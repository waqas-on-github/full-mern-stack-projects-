import { fetchDataStart , fetchDataSucess , fetchDataFailure } from "../featurs/productSlice";



export  const   fetchAsyncOne =  (id) => async (dispatch) => {
 dispatch(fetchDataStart()) 
 try {
   console.log(id);
    const response = await fetch(`/api/v1//product/get/${id}`);
        const data = await response.json();
     dispatch(fetchDataSucess(data))  
     console.log(data);
    
 } catch (error) {
    dispatch(fetchDataFailure(error.message))
 }
 
}