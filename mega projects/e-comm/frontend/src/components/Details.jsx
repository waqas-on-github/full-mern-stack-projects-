import { useEffect } from "react";
import { useParams } from "react-router-dom"
 import { useDispatch , useSelector } from "react-redux";
 import {fetchAsyncOne}  from '../../fetchstore/oneproductapi'


const DetailsScreen = () => {
     const {data , loading , error } = useSelector((state ) => state.data)
     const params = useParams() 
     
     
     const dispatch = useDispatch()
     useEffect(() => {
         dispatch(fetchAsyncOne(params.id))
         
         
        } ,  [])  
        
        
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
    <button>Buy now</button>  

 </>

 )    
  
 }
  


export default DetailsScreen