import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const AuthRequired = () => {
const user= useSelector((state) => state.auth.userinfo)
//  console.log(user);
if(!user ||  user === null) {
    return <Navigate to ='/login' />
}

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthRequired