import { useState } from "react";
import { useParams } from "react-router-dom"
import { useQuery  , useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
 import {updateuicount} from '../../../featurs/cartSlice'
import { useDispatch } from "react-redux";

 // product details 
const DetailsScreen = () => {
    
const [Quantity , setQuantity] = useState(0)
const params = useParams() 
const queryClient = useQueryClient()
const dispatch = useDispatch()


// getting data from api 

const {data , isLoading , isError  }  = useQuery({
  queryKey : [ `/product/${params?.id}`], 
  queryFn  : () => axios.get(`/api/v1/product/get/${params?.id}`)
  .then(responce => responce?.data)
}
)
   




const { data : postData,  isError :PostError , isLoading : postloading  ,  mutate , isSuccess } = useMutation({
  mutationFn :  async (dataToCart) => {
    return  await axios.post('/api/v1/cart/add' , dataToCart)
  }

, 
onSuccess : () => {

    queryClient.invalidateQueries({ queryKey: ['cart/items'] }) 

  //  console.log("sucess");
}, 
onMutate : (newitem ) => {
  console.log(newitem.Quantity);
  if(newitem.Quantity!==null && newitem.Quantity !== undefined)
  {
    console.log(newitem.Quantity);
    dispatch(updateuicount(newitem.Quantity))
  }

  else{
     dispatch(updateuicount(0))
    console.log(newitem.Quantity);

  }
}


})


     
   const  handleDecreaseChange  = () => {
    if(Quantity >= 1){
      setQuantity(Quantity -1 )
    }
   }
  
   const  handleIncreaseChange = () => {
    setQuantity(Quantity +1)
   }




     
  const dataToCart = {
      id :  data?.singleProduct?._id , 
      Quantity
     }
    
        
   const handleClick = async () => {
    
   mutate(dataToCart)
  
   }

        
      if(isLoading) {
        return <>  
         loading ...
        </>
      }

      if(isError) {
        return <>  check your internet connection and try again </>
      }


        const singleProduct = data?.singleProduct;
        const name = singleProduct?.name ?? "Product Name Not Available";
        const catagory = singleProduct?.catagory ?? "Category Not Available";
        const photos = singleProduct?.photos ??  "PHOTS NOT AVAILABLE ";
        const price = singleProduct?.price ?? "Price Not Available";
 return (
    <>
       <h1>{name}</h1> 
      <img src={photos[0].secure_url} alt="" />  
     <p> price :  $ {price}</p>
    <p> Catagory :  {catagory}</p> 
    <p>Quantity </p> <button onClick={handleDecreaseChange} >-</button> {Quantity} <button onClick={handleIncreaseChange} >+</button> 

    <button onClick={handleClick}> Add To Cart</button>  


 </>

 )    
  
 }
  


export default DetailsScreen