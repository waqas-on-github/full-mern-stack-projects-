import { Product } from "../models/product.schema.js"
import asynchandler from   '../services/asynchandler.js'
import {  uploadmultiple} from "../services/uploadservice.js"
import CustomError from '../utils/customError.js'
import cloudnaryconfig from "../config/cloudnaryconfig.js"
const cloudinary = cloudnaryconfig()

/**********************************************************
 * @ADD_PRODUCT
 * @route https://localhost:5000/api/product
 * @description Controller used for creating a new product
 * @description Only admin can create the coupon
 * @descriptio Uses cloudnary for image upload
 * @returns Product Object
 *********************************************************/


const addproduct  = asynchandler(  async (req, res ) =>{
  // console.log(req.user);
  // console.log(req.files);
  // console.log(req.body);
  const files = req.files
  
   
    if(!files) {
      throw new CustomError("images not found" , 400)
    }

      const {name , description  ,price , catagory , collectionId  } = req.body



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
   
      
console.log(req.body);
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
})

const findByCollection = asynchandler( async (req, res ) => {
   const collectionID = req.params.id 
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

const deleteproduct = asynchandler(async (req, res) => {
  const Id = req.params.id;
  let deletedresult = [];

  try {
    // Get product first
    const product = await Product.findById(Id);
    if(!product) {
      throw new CustomError("product not found " , 400)
    }

    // Get URLs from db and store them in an array
    const clids = product.photos.map((photo) => photo.public_id);

    // Delete photos from Cloudinary
    const deleteimages = clids.map((clid) => {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await cloudinary.uploader.destroy(clid);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });

    // Wait for all image deletions to complete
    const deletedImages = await Promise.all(deleteimages);
    deletedresult.push(deletedImages);

    // Delete the product from the database
    const deletedProduct = await Product.findByIdAndDelete(Id);
    if (!deletedProduct) {
      throw new CustomError("Product could not be deleted from the database", 400);
    }

    res.json({
      deleted: true,
      deletedresult,
      deletedProduct,
    });
  } catch (error) {
    throw new CustomError("Failed to delete product", 400);
  }
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
  console.log(id);
  
  const singleProduct = await Product.findById(id) 
  if(!singleProduct) {
    throw new CustomError("can not find any product accosiated to  this " + id , 400  )
  }
  
  res.json ({
    sucess : true  ,  
    singleProduct
  })

})


// todo update product 

export {
    addproduct,
    deleteall ,
    productroute ,
    findByCollection ,
    getAllProducts, 
    deleteproduct ,
    getOneProduct
}





