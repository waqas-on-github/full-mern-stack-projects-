import axios from "axios"
import { logout } from "../../../featurs/authSlice"
import { useDispatch  } from "react-redux"
const Logout = () => {

  const destroyToken = () => {
    axios.get("/api/v1/users/logout")
  } 

    const dispatch = useDispatch()
  return (
    <>
  
    <button type="submit"  onClick={() => {
   
     dispatch(logout())
     destroyToken()
    }} >Logout</button>
    </>
  )
}

export default Logout