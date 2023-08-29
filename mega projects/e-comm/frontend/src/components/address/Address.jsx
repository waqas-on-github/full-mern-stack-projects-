import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useFormik} from "formik"
import * as yup from 'yup'



const Address = () => {


const {mutate} = useMutation({
    mutationFn : async (data) => {
        return await axios.post("api/v1/address/create" , data)
    }, 
    onSuccess : ()=> {
        console.log("sucess");
    }, 
    onError : () => {
        console.log("error occerd ");
    }
})








const formik= useFormik({
    initialValues  : {
        street :  "" , 
        city :   '',
        state:  '', 
        zipCode :  ''
    },
 
    validationSchema : yup.object({
        street : yup.string(),
        city : yup.string(), 
        state : yup.string(),
        zipCode : yup.number()
    }),



    onSubmit: values => {
       console.log(values);
       mutate(values)

      },
   
})


  return (
  <> 
  
  <form onSubmit={formik.handleSubmit} > 

   <label htmlFor="street"> Street : </label>
   <input 
   type="text"
   name="street" 
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
    value={formik.values.street}
   />
  
  <label htmlFor="city"> city : </label>
   <input 
   type="text"
   name="city" 
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
    value={formik.values.city}
   />
  
  <label htmlFor="state">  state: </label>
   <input 
   type="text"
   name="state" 
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
    value={formik.values.state}
   />
  


  <label htmlFor="zipCode"> zipCode: </label>
   <input 
   type="text"
   name="zipCode" 
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
    value={formik.values.zipCode}
   />
  

<button type="submit">submit</button>
  
  </form>
  
  </>
  )
}

export default Address