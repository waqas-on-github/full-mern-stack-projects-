import { useQuery } from "@tanstack/react-query";
import axios  from "axios";
import { useDispatch } from "react-redux";
import { setUicount } from "../../featurs/cartSlice";


 

const useCartItems = () => {
 
 const dispatch = useDispatch()





const  {data   , isError , isSuccess , error } = useQuery({
    queryKey :  ['cart/items'] , 
    queryFn : async () => {
       const data = await axios.get("/api/v1/cart/items")
      return data.data
     
     }
  
     ,onSuccess : (data ) => {
  
      var cartlength = data?  data?.cartItems[0]?.items?.map((item) => {
        return  item.quantity
        
        
      }): []
  
  
  
      let initialvalue =0
      var totallength = cartlength?.reduce((accu , curr) => accu +curr , initialvalue )
      console.log(totallength);
  
  
      if((totallength !== null) && totallength !== undefined) {
         dispatch(setUicount(totallength))
      }
      else {
      dispatch(setUicount(0))
  
      }
    } 
    
  
  })


return {
    data , 
    isError ,
    error ,
    isSuccess
}

}

export default useCartItems