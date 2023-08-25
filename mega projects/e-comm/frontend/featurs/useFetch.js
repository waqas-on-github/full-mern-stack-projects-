import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useFetch = () => {

const  {data  ,  } = useQuery({
    queryKey :  ['cart/items'] , 
    queryFn : async () => {
       const data = await axios.get("/api/v1/cart/items")
      return data.data
  
    }})


    const cartlength = data?.cartItems[0]?.items?.map((item) => {
        return  item.quantity
     })
     
     let initialvalue =0
     
     const totallength = cartlength?.reduce((accu , curr) => accu +curr , initialvalue )
    



    return {data , totallength}
}