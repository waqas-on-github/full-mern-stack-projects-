import { useNavigate } from "react-router-dom"
import useMutateAll from "../../Apis/Cart/useMutateAll"
import Cart from "../components/cart/Cart"
import useAddress from '../../Apis/address/useAddress.js'


const CartScreen = () => {
 const {mutate} = useMutateAll()
 const navigate = useNavigate()
  const {data} = useAddress()

  

const handleClick = () => {
  if(data?.address) {
    navigate("/")
  }
else {
  navigate('/address')

}
}

  return (
 <> 
 <Cart  />
 <button onClick={() => {mutate()}} > Delete All  </button>
 <button onClick ={handleClick} > PROCEED TO CHECKOUT  </button>
 </>
  )
}

export default CartScreen