import { useFormik } from "formik"
import styles from '../../css/genral.module.css'



const Uploadproduct = () => {

const formik = useFormik({
    initialValues : {
        name: '' , 
        description :'',
        price :'', 
        catagory :'',
        collectionId:"" ,
        photos : []
    }, 
    onSubmit :  async (values , {resetForm}) => {

   const formdata = new FormData()

   values.photos.forEach((image) => {
    formdata.append( 'photos' , image)
   })

    // Loop through other values and append them to FormData
    for(const key in values) {
        if(key!=="photos")
      formdata.append(key , values[key])
    }
   

    console.log(formdata);

     const responce = await fetch("/api/v1/products/new" , {
          method:"POST" , 
          body : formdata
     })
   
   const data = await responce.json()
  //  console.log(data);
   
    resetForm({values : ''})
            }

})

  return (
    <> 
    <form className={styles.formcontainer} onSubmit={formik.handleSubmit} encType="multipart/form-data" > 

    <label htmlFor="name "> name </label>
    <input 
    type="text"
    name ="name"
    onChange={formik.handleChange}
    value={formik.values.name}
    />

<label htmlFor="description "> description </label>
    <input 
    type="text"
    name ="description"
    onChange={formik.handleChange}
    value={formik.values.description}
    />


<label htmlFor="price"> price </label>
    <input 
    type="number"
    name ="price"
    onChange={formik.handleChange}
    value={formik.values.price}
    />

<label htmlFor=""> collectionId </label>
    <input 
    type="text"
    name ="collectionId"
    onChange={formik.handleChange}
    value={formik.values.collectionId}
    />

<label htmlFor="catagory"> catagory </label>
    <input 
    type="text"
    name ="catagory"
    onChange={formik.handleChange}
    value={formik.values.catagory}
    />

  <label htmlFor="images">select images</label>
  <input 
  type="file"
  accept="image/*"
  multiple
  onChange={(e) => {
    const filesArray = Array.from(e.currentTarget.files)
    formik.setFieldValue("photos" , filesArray)
  }}
    />


   <button type="submit" > upload </button>
   </form>
    </>
  )
}

export default Uploadproduct