import { useFormik } from "formik";
import { setCredentials } from "../../../featurs/authSlice";
import { useDispatch } from "react-redux";
import styles from  "../../css/genral.module.css"


export const Signup = () => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues : {
      name : '' , 
      email: '' , 
      password: '' , 
      role : ''
    }, 
    onSubmit : async (values , {resetForm }) => {
      try {
        const response = await fetch('/api/v1/users/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
          console.log(values);
        const data = await response.json();

        console.log(data); // Handle the response data as needed
        if(data) {
          dispatch(setCredentials(data))
        }
        resetForm({values : ''})
      } 
      catch(error) {
        console.log(error);
      }
    }
  })


  return (
    <>
      <form className={styles.formcontainer}  onSubmit={formik.handleSubmit} >
      <label htmlFor="name">Name </label>
        <input
         className='border'
         name='name' 
         type="text"
         value={formik.values.name} 
         onChange={formik.handleChange}
        
        />

      <label htmlFor="email">Email Address</label>
      <input 
      className="border"
      type="email"
      name="email" 
      value={formik.values.email}
      onChange={formik.handleChange}

      />

      <label htmlFor="password"> password :</label>
      <input 
      className="border"
      type="password"
      name="password" 
      value={formik.values.password}
      onChange={formik.handleChange}

      />
     <label htmlFor="role"> role </label>
     <select
        className="border"
        name="role"
        value={formik.values.role}
        onChange={formik.handleChange}
      >
        <option  disabled hidden     value=""> select</option>
        <option value="USER">USER</option>
        <option value="MODIRATOR">MODERATOR</option>
        <option value="ADMIN">ADMIN</option>
      </select>



        <button type="submit"  >send data </button>
      </form>
    </>
  );
};
