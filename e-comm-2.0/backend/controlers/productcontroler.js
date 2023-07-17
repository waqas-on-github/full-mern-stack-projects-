import { Product } from "../models/product.schema.js.js"
import asynchandler from   '../services/asynchandler.js'
import {    uploadmultiple} from "../services/uploadservice.js"
import CustomError from '../utils/customError.js'
import {error, log} from 'console'  


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

      const {name , description  ,price , catagory , collectionId  } = req.body



     console.log(req.body);
       if (  !name   ||!description   ||!price   ||!catagory   ||!collectionId)
   {
  throw new CustomError("please fill all fields" , 400)
   }

      
     // // validating unique product name 
      const isproductexist =  await Product.findOne({name}) 

        if(isproductexist) {
       throw new CustomError("product already exist " , 400)
       }

   const result =   await uploadmultiple(req,res)
   
    console.log(result);
      

   const product = new Product({
    name ,  description  ,price , catagory, collectionId,
    photos : result.map((photo) => ({ secure_url : photo.secure_url , public_id :photo.public_id}))   })


      
      
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


  const findByCollection = asynchandler( async (req, res ) => {
   const collectionID = req.params.id 
    log(collectionID)
    const  products = await  Product.find({collectionId:collectionID})    
    // cna list collections here  
    res.json({
      sucess :true , products
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


const 
deleteproduct = asynchandler(async(req, res ) => {
  const collectionId  = req.params.id 
  // what things ive to delete 
  // 1 db recode whole product + images secure urls
  // images array from cloudniary 

  
  
  // get product first 
  const product = await  Product.findById(collectionId)
    console.log(product);
  // get urls from db and store them in array 
    const urls =[]
    product.photos.forEach((photo) => {
      const url = photo.secure_url
      urls.push(url) 
      
    })
    console.log(urls);



    // delete photos from cloudnairy 



  })




const getAllProducts = asynchandler(async(req,res) => 
{

  const products = await Product.find() 
  if(!products) {
    throw new   CustomError("cabn not find products " , 400) 
  }


 res.json({
  sucess : true , 
  products
 })

})

const getOneProduct  = asynchandler(async(req, res) => {
  const id = req.params.id 
  
  const singleProduct = await Product.findById(id) 
  if(!singleProduct) {
    throw new CustomError("can not find any product accosiated to  this " + id , 400  )
  }
  
  res.json ({
    sucess : true  ,  
    singleProduct
  })

})


export {
    addproduct,
     deleteall ,
      productroute ,
      findByCollection ,
       deleteproduct ,
        getAllProducts, 
        getOneProduct
}





