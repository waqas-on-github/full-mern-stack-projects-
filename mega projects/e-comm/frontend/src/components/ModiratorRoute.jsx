import { useSelector  } from "react-redux/es/hooks/useSelector"
import { Outlet  } from "react-router-dom"


const Modirator = () => {
const user= useSelector((state) => state.auth.userinfo.user.role)

console.log(user);

if(user ==="MODIRATOR") {
    return <Outlet/>
}

}

export default Modirator