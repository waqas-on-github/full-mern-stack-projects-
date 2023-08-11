import { fetchDataStart , fetchDataSucess , fetchDataFailure } from "../featurs/productSlice";



export  const   fetchAsyncData = async (dispatch ) => {
 dispatch(fetchDataStart) 
 try {
    const response = await fetch("/api/v1/products/all");
        const data = await response.json();
     dispatch(fetchDataSucess(data))  
     console.log(data);
    
 } catch (error) {
    dispatch(fetchDataFailure(error.message))
 }
 
}