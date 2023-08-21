import { useFormik } from 'formik'
import { setCredentials } from '../../../featurs/authSlice';
import { useDispatch } from 'react-redux';
import styles from  '../../css/genral.module.css'

const Login = () => {

const dispatch = useDispatch()
    const formik = useFormik({
        initialValues : {
            email : "" , 
            password : ""
        }, 
        onSubmit : async function (values , {resetForm} ) {
          console.log(values);
            try {
                const res = await fetch('/api/v1/users/login' , {
                    method : 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(values),
            
                })

                const data =  await res.json()
                if(data){
                    dispatch(setCredentials(data))
                  }
                  resetForm({values : ''})

                } catch (error) {
                console.log(error.message);
            }
        } 
    })
  return (
    <> 
     <form  className={styles.formcontainer}   onSubmit={formik.handleSubmit}>
    <label htmlFor="email"> email:  </label>
    <input 
    name="email"
    type="text"
    value={formik.values.email}
    onChange={formik.handleChange}
    />


   <label htmlFor="password"> password</label>
   <input 
   type="password"
   name='password' 
   value={formik.values.password}
   onChange={formik.handleChange}
    />
   

   <button type='submit'> Login</button>

     </form>


    
    
    </>
  )
}

export default Login