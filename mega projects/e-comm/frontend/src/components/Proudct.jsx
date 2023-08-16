import {  useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { fetchAsyncData } from "../../fetchstore/productapi"
import {  NavLink } from "react-router-dom"




const Proudct = () => {
  const dispatch = useDispatch()
  const {data , loading , error } = useSelector((state ) => state.data)
  // console.log(data);

  
 useEffect(() => {
 
dispatch(fetchAsyncData)
 } , [])

if(loading) {
  return <> loading ... </>
}

if(error ) {
  return <> smething went wrong </>
}

  return (
    <>
     {data?.products?.map((item) => {
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