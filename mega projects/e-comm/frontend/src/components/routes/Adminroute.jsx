import { useSelector  } from "react-redux/es/hooks/useSelector"
import { Outlet , Navigate } from "react-router-dom"


const Adminroute = () => {
const user= useSelector((state) => state?.auth?.userinfo?.user?.role)


if(user ==="ADMIN") {
    return <Outlet/>
}

else {
    return <Navigate to='/login' />
}
}

export default Adminroute