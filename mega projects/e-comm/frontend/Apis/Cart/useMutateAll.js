import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


const useMutateAll = () => {
    
const QueryClint = useQueryClient()

const {mutate } = useMutation({
        mutationFn : () => {
          return axios.delete('/api/v1/cart/delete')
        },
     
        onSuccess : () => {
         QueryClint.invalidateQueries( { queryKey : ["cart/items"]})
        
       }
     
       })

return {
    mutate
}

}


export default useMutateAll