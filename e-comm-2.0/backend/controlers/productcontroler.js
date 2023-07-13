import { Product } from "../models/product.schema.js.js"
import multer from "multer"
import cloudnaryconfig from "../config/cloudnaryconfig.js"
import asynchandler from   '../services/asynchandler.js'
import CustomError from '../utils/customError.js'

const clodunairy = cloudnaryconfig()

const storage = multer.diskStorage({
  destination :  function (req, file , cb ) {
    cb( null  , "uploads/")
  }
,
  filename : function (req , file , cb ) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null , file.fieldname + "-" + uniqueSuffix)

  } 
})

const upload = multer({storage : storage })




/**********************************************************
 * @ADD_PRODUCT
 * @route https://localhost:5000/api/product
 * @description Controller used for creating a new product
 * @description Only admin can create the coupon
 * @descriptio Uses AWS S3 Bucket for image upload
 * @returns Product Object
 *********************************************************/


 const addproduct  = asynchandler (  async (req, res ) =>{

    const    {name ,description ,price ,photos ,catagory} = req.body
  console.log(req.body);
   const product = await Product.create(req.body)
   if(!product) {
     throw new CustomError(" product can't be created by some reason" , 400)
   }
   
   res.json({
    product
   })


 })
 









































































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
    addproduct, deleteall
}





