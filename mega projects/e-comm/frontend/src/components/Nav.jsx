import { NavLink  , Outlet} from 'react-router-dom'
const Nav = () => {
  return (
   <>  
<h1>Logo</h1>   
<NavLink to ='/products'> products </NavLink>
<NavLink  to='/signup'  > signup </NavLink>
 <Outlet/>
   </>

  )
}

export default Nav