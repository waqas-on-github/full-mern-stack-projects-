
import { useEffect } from "react"
import {getCabins} from "../services/cabinApi"

const Cabins = () => {
 
const fetchcabins = async () => {
  const data = await getCabins()
  console.log(data);
}

 useEffect(  () => {
  
fetchcabins()
  

 } , [])


  return (
    <div>Cabins</div>
  )
}

export default Cabins