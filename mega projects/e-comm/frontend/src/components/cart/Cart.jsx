import { useQuery } from "@tanstack/react-query"
import axios from "axios"
  

const Cart = () => {
// getting cart data by user id  from endpoint 

const {data  } = useQuery({
  queryKey :  ['cart/items'] , 
  queryFn : async () => {
     const data = await axios.get("/api/v1/cart/items")
    return data.data

  }
  
  
})

console.log(data);





  return (
    <div>Cart</div>
  )
}

export default Cart



// select a  product 
// add it into  redux toolkit store array 
// 
