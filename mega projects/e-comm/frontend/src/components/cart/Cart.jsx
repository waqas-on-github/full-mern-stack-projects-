import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useDispatch } from "react-redux"
 import { setUicount , deleteCart } from "../../../featurs/cartSlice"



const Cart = () => {
// getting cart data by user id  from endpoint 
const dispatch = useDispatch()
const queryClient = useQueryClient()

// quering data from backend 
const  {data  , isSuccess , isError  } = useQuery({
  queryKey :  ['cart/items'] , 
  queryFn : async () => {
     const data = await axios.get("/api/v1/cart/items")
    return data.data
   
   }

   ,onSuccess : (data ) => {
    console.log(data);


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
    //  dispatch(setUicount(0))
    dispatch(setUicount(0))

    }
  } 
  

})


// log query data 
console.log(data)




// deleting data from cart 

const { data :deleted , mutate } = useMutation({
  mutationFn : (id) => {
   return axios.delete(`/api/v1/cart//delete/${id}`)

  }, 
  onSuccess : () => {
    queryClient.invalidateQueries(["cart/items"])
   
  }
})





if(isError) {
  return <> something went wrong </>
}





// todo make it with quantity and price calculation and also update cart on verey item posted 

 // updating store for count ui 



 const handelDelete = (id) => {
  console.log(id);
   mutate(id)
 
 }




  return (
    <>
    {data?.cartItems[0]?.items?.map((item) => {
      let product = item.productId 
      return (<> 
      <div >
       <h1>{product?.name}</h1>
       <p> Quantity : {item?.quantity}</p>
        <button onClick={()=>handelDelete(product._id)} > delete  </button>
      </div>
      </>)

    })}
    
    </>
  )
}

export default Cart



