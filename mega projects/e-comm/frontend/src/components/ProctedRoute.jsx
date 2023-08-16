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
        <h1> this is proctacted head </h1>
        <Outlet/>
    </div>
  )
}

export default AuthRequired