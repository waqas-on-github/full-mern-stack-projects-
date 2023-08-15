import { NavLink  , Outlet} from 'react-router-dom'
import Logout from './Logout'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import styles from '../css/genral.module.css'
// import BsPersonCircle from 
const Nav = () => {
  const user = useSelector((state) => state.auth.usrinfo)

  console.log(user);
  return ( <>
<nav  className={styles.navcontainer}>


<h1 >Logo</h1>

<Logout/>
<NavLink to ='/products'> Products </NavLink>
<NavLink  to='/signup'  > Signup </NavLink>
<NavLink to ='/login' > Login </NavLink>
<NavLink to ='/pro' > pro </NavLink>


 
  </nav>
 <Outlet/>
 </>
  )
}

export default Nav