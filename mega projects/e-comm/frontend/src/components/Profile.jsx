import {  useSelector } from "react-redux/es/hooks/useSelector"

const Profile = () => {
    const user = useSelector((state) => state.auth.userinfo)
    console.log(user); 
  return (
    <> 
<h1>  Todo //  i will make it work soon </h1>
    
    </>
  )
}

export default Profile