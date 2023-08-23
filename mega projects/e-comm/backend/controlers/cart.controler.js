import asynchandler from   '../services/asynchandler.js'
import CustomError from '../utils/customError.js'
import { Cart } from '../models/cart.js'
import {Product} from '../models/product.schema.js'
import { Coupon } from '../models/coupon.schema.js'


const addToCart = asynchandler(async (req, res) => {
   const userId = req?.user 

  
   const {id : productId, Quantity : quantity} = req.body
  console.log(productId);
  
 // find dose user have already cart  
  let cart  = await Cart.findOne({owner:userId})
  console.log("after this cart ");
  // // If cart doesn't exist, create a new one
  if(!cart) {
    cart = new Cart({owner:userId})
  }
  
  
  
  // if item already exist
  
  let existingItem = cart.items.find ((item) => {
    return item.productId.toString() === productId
  })
  console.log(existingItem);
  



   if(existingItem) {
      existingItem.quantity +=quantity
   }
 
  else {
   cart.items.push({productId , quantity})
  }

  await cart.save() 




res.json({
  sucess: true , 
  cart 
})})


const getCart = asynchandler(async (req, res) => {
  // get user id
const id = req?.user

console.log(id);
if(!id) {
  throw new CustomError("user must be logged in " , 400)
}

// find cart item s by user id 

const cartItems = await Cart.find({owner :  id }).populate("items.productId").exec()



res.status(200).json({
  sucess : true , 
  cartItems
})

})


export  {
  addToCart ,
  getCart   

}