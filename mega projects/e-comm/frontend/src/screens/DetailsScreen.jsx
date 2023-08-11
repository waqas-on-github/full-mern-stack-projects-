import { useEffect } from "react";
import { useParams } from "react-router-dom"
 import { useDispatch , useSelector } from "react-redux";
 import {fetchAsyncOne}  from '../../fetchstore/oneproductapi'


const DetailsScreen = () => {
     const {data , loading , error } = useSelector((state ) => state.data)
     const params = useParams() 
     console.log(params.id);
     
     
     const dispatch = useDispatch()
     useEffect(() => {
         dispatch(fetchAsyncOne(params.id))
         
         
        } ,  [params.id])  
        
        
        if(!data || loading) { {
            return (<> 
        lodaing ... 
    </>)
 }}
 
 if(error) {
     return (<> 
      error geting data from server check your internet connection 
    </>)
 }
 
 const {name , catagory , photos , price  } =   data?data.singleProduct : "got error on destrcturing "

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