import {  useFormik } from "formik";
import {  useSelector } from "react-redux/es/hooks/useSelector"
import styles from '../../css/genral.module.css'


const Profile = () => {
    const user = useSelector((state) => state.auth.userinfo)
    console.log(user); 

    const formik = useFormik({ 
      initialValues : {
        name : user.user.name , 
        email : user.user.email , 
        role : user.user.role
      } ,  
      onSubmit : async (values , {resetForm}) => {

      console.log(values);
      

      } 
    }) 

  return (
    <> 
        
    <form  className= {styles.formcontainer}  onSubmit={formik.handleSubmit} method="post"> 


      <label htmlFor="name :">Name : </label>
      <input 
      type="text"
      name= "name" 
      value={formik.values.name}
      onChange={formik.handleChange}
      />
     
     <label htmlFor=" email">Email : </label>
      <input 
      type="text"
      name= "email" 
      value={formik.values.email}
      onChange={formik.handleChange}
      />
     
     <label htmlFor="role"> role: </label>
      <input 
      type="text"
      name= "role" 
      value={formik.values.role}
      onChange={formik.handleChange}
      />
     
   <button >update</button>

   <h1>todo // create user update api in backend </h1>
    
    </form>


    </>
  )
}

export default Profile