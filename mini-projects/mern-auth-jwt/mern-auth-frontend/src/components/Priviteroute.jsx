import { Outlet , Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

 

function Priviteroute() {
  const userInfo = useSelector((state ) => state.auth.userInfo)


  return (
      <> 
       {userInfo ? <Outlet/> : <Navigate to = '/login' replace  /> }
     </>
  )
}

export default Priviteroute