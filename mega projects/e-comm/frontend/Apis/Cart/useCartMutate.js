import { useMutation , useQueryClient } from "@tanstack/react-query";
import axios from "axios";



const useCartMutate = ()=> {
    const queryClient = useQueryClient()

    const { data :deleted , mutate } = useMutation({
        mutationFn : (data) => {
      
          return axios.post(`/api/v1/cart/delete/${data.id}` , {
          body : {data}
         })
      
        },  
        onSuccess : () => {
          queryClient.invalidateQueries( { queryKey : ["cart/items"]})
         
        }
      })


return  {
    mutate , 
    deleted
}

}

export default useCartMutate