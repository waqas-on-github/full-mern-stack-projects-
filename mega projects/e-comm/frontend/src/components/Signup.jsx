import { useFormik } from "formik";


export const Signup = () => {
  const formik = useFormik({
    initialValues : {
      name : '' , 
      email: '' , 
      password: '' , 
      role : ''
    }, 
    onSubmit : (values) => {
      const vals = JSON.stringify(values  , null , 2)
      console.log(vals);
    }
  })


  return (
    <>
      <form onSubmit={formik.handleSubmit} >
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
     type='text'
     value={formik.values.role}
     onChange={formik.handleChange}
       
       >
    <option>USER</option>
    <option>MODERATOR</option>
    <option>ADMIN</option>

       </select>



        <button type="submit"  >send data </button>
      </form>
    </>
  );
};
