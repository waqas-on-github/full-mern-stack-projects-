import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// goal fetch all proudcts

const useProducts = () => {

const {data , error , isError , isSuccess ,isLoading ,  refetch , isFetched} = useQuery({
    queryKey : ["product"] , 
    queryFn :  async () => {
    try {
        const responce  = await axios.get('/api/v1/products/all') 
        return responce.data.products
        
      } catch (error) {
         return error.message
      }
    }
    
})

return  {
    data, 
    error, 
    isLoading, 
    refetch, 
    isError, 
    isSuccess ,
    isFetched
}


}


export  default useProducts


