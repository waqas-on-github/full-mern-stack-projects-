import { useState  , useEffect } from "react"



const Proudct = () => {
const [products , setproducts] = useState([])
 useEffect(() => {
 
 async function getproducts () {
   try {
      const data = await fetch("/api/v1/products/all")
      const product = await data.json()
      if(product) {
          setproducts( ...products ,  product)
    }

   } catch (error) {
     console.log(error);
   }
 }

  
getproducts()

 } , [])

console.log();


  return (
    <>
   {products?.products?.map((item) => {
    return (< div key={item._id}>
    
      <h1>{item.name}</h1>
     </div> )

   })}
    </>
  )
}

export default Proudct