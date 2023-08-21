import { NavLink, Outlet } from 'react-router-dom';
import Logout from '../users/Logout';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles  from '../../css/genral.module.css'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";



const Nav = () => {
  const [isactive , setisactive ] = useState(false)
  
  const handleMouse = () => {
    setisactive(!isactive)
  }

  const user = useSelector((state) => state.auth.userinfo);
  
  return (
    <nav >
  
      <div className={styles.navcontainer}>
        <NavLink to ='/' > Logo  </NavLink>
        <NavLink to="/products" >Products</NavLink>
        <NavLink to='/Cart' > Cart</NavLink>
        {/* if user is loggend in show only user name and logout button */}
        {user? <> 
         <div className= {styles.navcontainer} >

          <span> {user?.user?.name} <span onMouseEnter={handleMouse} > <RxCaretDown/> </span></span>
          
           {isactive&& <div  onMouseLeave={handleMouse}  className= {styles.model} > 
               
               <NavLink to = '/profile' >   my Profile  </NavLink>
               <Logout/>

            </div>}
        </div> 
        </> :
        
        <>  
        <div className= {styles.navcontainer} > 
        <NavLink to="/signup" >Signup</NavLink>
        <NavLink to="/login" >Login</NavLink>
        </div>
        </> }

     {/* only admin routes */}

     {user?.user?.role==="ADMIN" ?  <>  
     
      <NavLink to='/upload' > upload products </NavLink>
     
     </>  : null}


      </div>
      <Outlet />
    </nav>
  );
};

export default Nav;
