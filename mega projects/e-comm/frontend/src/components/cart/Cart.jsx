import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchCartData } from "../../../fetchstore/cartapi"


const Cart = () => {

const dispatch = useDispatch()

useEffect(()=> {

  const data =  dispatch(fetchCartData()) 
  console.log(data);


} , [])





  return (
    <div>Cart</div>
  )
}

export default Cart



// select a  product 
// add it into  redux toolkit store array 
// 
