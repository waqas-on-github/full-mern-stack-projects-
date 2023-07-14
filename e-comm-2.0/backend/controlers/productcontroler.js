import { Product } from "../models/product.schema.js.js"
import asynchandler from   '../services/asynchandler.js'
import {    uploadmultiple} from "../services/uploadservice.js"
import CustomError from '../utils/customError.js'


/**********************************************************
 * @ADD_PRODUCT
 * @route https://localhost:5000/api/product
 * @description Controller used for creating a new product
 * @description Only admin can create the coupon
 * @descriptio Uses cloudnary for image upload
 * @returns Product Object
 *********************************************************/


 const addproduct  = asynchandler(  async (req, res ) =>{
  const urls = []
  const files = req.files
  
   
    if(!files) {
      throw new CustomError("images not found" , 400)
    }

      const {name} = req.body

     console.log(req.body);
       


   
     // // validating unique product name 
      const isproductexist =  await Product.findOne({name}) 

        if(isproductexist) {
       throw new CustomError("product already exist " , 400)
       }

   const result =   await uploadmultiple(req,res)
   
    
      

   const product = new Product({
    name ,  
    photos : result.map((photo) => ({ secure_url : photo }))
   })


      
      
      const added = await product.save()
      if(!added) {
        throw new CustomError("product can not be added " , 400 )
      }


      res.json({
        added
      })



    })
 
   




  


  


const productroute = asynchandler( async( req, res ) => {
  res.render('imageupload')
} )

































































const  deleteall =   asynchandler( async(req  , res) => {
  const deleted =  await Product.deleteMany({})
   if(!deleted) {
    throw new CustomError("can not delete items " , 400)
   }

   res.json({
    deleted :  true  , 
    deleted
   })

})

export {
    addproduct, deleteall , productroute
}





