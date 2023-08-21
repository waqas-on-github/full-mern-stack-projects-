import {  NavLink } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import * as productApi from '../../../fetchstore/fetchProduct.js'



const Proudct = () => {

const {data  , error , loading}  = useQuery(['users' , 'hello'] , productApi.getProducts)
console.log(data);



if(loading) {
  return <> loading ... </>
}

if(error ) {
  return <> smething went wrong </>
}

  return (
    <>
     {data?.map((item) => {

      return <   div key={item._id} > 
      < NavLink to={`/products/details/${item._id}`}  key={item._id} className="border w-[1000px] p-10 flex flex-col gap-5" >
        <h2>{item?.name}</h2>
        
        <img  className="w-[500px]"  src={item?.photos[0]?.secure_url} alt="" />
       
      </NavLink>
       </div>

     })}

    </>
  )
}

export default Proudct