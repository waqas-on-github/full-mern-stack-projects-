import { logout } from "../../../featurs/authSlice"
import { useDispatch  } from "react-redux"
const Logout = () => {

    const dispatch = useDispatch()
  return (
    <>
    
    <button type="submit"  onClick={() => {

     dispatch(logout())

    }} >Logout</button>
    </>
  )
}

export default Logout