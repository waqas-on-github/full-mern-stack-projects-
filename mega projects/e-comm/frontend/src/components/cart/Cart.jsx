import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useDispatch } from "react-redux"
 import { setUicount  } from "../../../featurs/cartSlice"



const Cart = () => {
// getting cart data by user id  from endpoint 
const dispatch = useDispatch()
const queryClient = useQueryClient()

// quering data from backend 
const  {data   , isError  } = useQuery({
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
  mutationFn : (data) => {

    return axios.post(`/api/v1/cart//delete/${data.id}` , {
    body : {data}
   })

  },  
  onSuccess : () => {
    queryClient.invalidateQueries( { queryKey : ["cart/items"]})
   
  }
})





if(isError) {
  return <> something went wrong </>
}



console.log(deleted);

// todo make it with quantity and price calculation and also update cart on verey item posted 

 // updating store for count ui 



 const handelDelete = (id) => {

   mutate({id:id ,cartId :data.cartItems[0]._id   })

 
 }




  return (
    <>
    {data?.cartItems[0]?.items?.map((item) => {
      let product = item.productId 
      return (<> 
      <div >
       <h1>{product?.name}</h1>
       <p> Quantity : {item?.quantity}</p>
        <button onClick={()=>handelDelete( product._id )} > delete  </button>
      </div>
      </>)

    })}
    
    </>
  )
}

export default Cart



