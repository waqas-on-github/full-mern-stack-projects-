import { useSelector  } from "react-redux/es/hooks/useSelector"
import { Outlet , Navigate } from "react-router-dom"
import { logout } from "../../../featurs/authSlice"


const Adminroute = () => {
const user= useSelector((state) => state?.auth?.userinfo?.user?.role)


if(user ==="ADMIN") {
    return <Outlet/>
}

}

export default Adminroute