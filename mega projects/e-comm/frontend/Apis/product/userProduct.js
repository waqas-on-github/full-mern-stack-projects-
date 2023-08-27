
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const useProducts = (id) => {

    const {data , isLoading , isError  }  = useQuery({
        queryKey : [ `/product/${id}`], 
        queryFn  : () => axios.get(`/api/v1/product/get/${id}`)
        .then(responce => responce?.data)
      }
      )

 return  {
    data, isLoading , isError
 }
}


export default useProducts