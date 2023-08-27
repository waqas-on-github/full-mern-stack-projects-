import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
import * as  S from '../../css/genral.module.css'



const Dashboard = () => {



  return (
    <> 
  <div className={S.Dash_container}>
    <div className={S.side_nav} > 
    <NavLink to = '/dashboard/upload' >  Upload </NavLink> <pre/>
    <NavLink to = "/dashboard/manage"> Products </NavLink>
    </div>


   <div className={ S.manage_product} >
    <Outlet/>
   </div>
   </div>
    </>
  )
}

export default Dashboard