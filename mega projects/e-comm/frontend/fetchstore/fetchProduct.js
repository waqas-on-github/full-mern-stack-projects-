import axios from "axios";
const ProductApi = axios.create()

  // export const getProducts =() => ProductApi.get('/api/v1/products/all').then((res) => res.json())



  export const getProducts = async() =>{
    try {
      const responce  = await ProductApi.get('/api/v1/products/all') 
      return responce.data.products
      
    } catch (error) {
       return error.message
    }

  } 



  export const oneProduct = async  (id) => {
    try {
       
      const responce  = await ProductApi.get(`/api/v1//product/get/${id}`) 
      return responce.data.products


    } catch (error) {
      return error.message 
    }
  }


  