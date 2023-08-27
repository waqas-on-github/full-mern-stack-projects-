import axios from "axios"
import Cart from "../components/cart/Cart"
import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"

const CartScreen = () => {
  
  const QueryClint = useQueryClient()
  const {mutate } = useMutation({
   mutationFn : () => {
     return axios.delete('/api/v1/cart/delete')
   },

   onSuccess : () => {
    QueryClint.invalidateQueries( { queryKey : ["cart/items"]})
   
  }

  })

  return (
 <> 
 <Cart  />
 <button onClick={() => {
  mutate()
 }} > Delete All  </button>
 </>
  )
}

export default CartScreen