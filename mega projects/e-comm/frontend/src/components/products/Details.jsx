import { useState } from "react";
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

 
const DetailsScreen = () => {
    
const params = useParams() 

const {data , loading , error  }  = useQuery({
  
  queryKey : [ `/product/${params?.id}`], 
  queryFn  : () => axios.get(`/api/v1//product/get/${params?.id}`)
  .then(responce => responce?.data)
}
)
   
console.log(data );



 
     const [Quantity , setQuantity] = useState(0)

     
     const  handleDecreaseChange  = () => {
      if(Quantity >= 1){

        setQuantity(Quantity -1 )
      }
     }
     

     const  handleIncreaseChange = () => {
      setQuantity(Quantity +1)
     }




     
    
        
   const handleClick = () => {
    
   const dataToCart = {
    id :  data?.singleProduct?._id , 
    Quantity
   }

   console.log(dataToCart);

   }

        
      if(loading) {
        return <>  
         loading ...
        </>
      }

      if(error) {
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