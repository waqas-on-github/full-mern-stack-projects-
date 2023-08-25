import asynchandler from   '../services/asynchandler.js'
import CustomError from '../utils/customError.js'
import { Cart } from '../models/cart.js'
import {Product} from '../models/product.schema.js'
import { Coupon } from '../models/coupon.schema.js'
import { User } from '../models/user.schmea.js'


const addToCart = asynchandler(async (req, res) => {

   const userId = req?.user 
   const {id : productId, Quantity : quantity} = req.body


  
 // find dose user have already cart  
  let cart  = await Cart.findOne({owner:userId})
   
  // console.log(cart);
  // // If cart doesn't exist, create a new one

  if(!cart) {
    cart = new Cart({owner:userId})
  }
  
  
  
  // if item already exist
  
  let existingItem = cart.items.find ((item) => {
    return item.productId.toString() === productId
  })
  // console.log(existingItem);
  



   if(existingItem) {
      existingItem.quantity +=quantity
   }
 
  else {
   cart.items.push({productId , quantity})
  }

  await cart.save() 




res.json({
  success: true , 
  cart 
})})


const getCart = asynchandler(async (req, res) => {
  // get user id
const id = req?.user

// console.log(id);
if(!id) {
  throw new CustomError("user must be logged in " , 400)
}

// find cart item s by user id 

const cartItems = await Cart.find({owner :  id }).populate("items.productId").exec()



res.status(200).json({
  success : true , 
  cartItems
})

})


// delete whole cart 
const deleteCart = asynchandler(async (req, res) => {
   if(!(req?.user)) {
    throw new CustomError("user not found " , 400 )
   }

  const deleted  = await Cart.deleteMany({owner: req?.user })

  if(!deleted) {
    throw new CustomError("cart can not be deleted something wen wrong" , 400)
  }


   res.status(200).json({
    success : true  , 
    deleted
  })
   
  
   
})



// delete one item 

 const deleteItem = asynchandler(async (req, res ) => {
  // console.log(req.body);

  const itemId  = req?.params?.id 
  const userId = req.user
   console.log(req.body.body.data.cartId);
  

  

  const cart = await Cart.findOne({_id : req.body.body.data.cartId , owner : userId})


   //find desired item to be deleted index in array 
  const itemIndexToDelete = cart.items.findIndex(
    (item) => item.productId.toString() === itemId
  );
// if index not found 
  if (itemIndexToDelete === -1) {
    throw CustomError("Item not found in cart" , 401);
  }


  // Remove the item from the items array
  cart.items.splice(itemIndexToDelete, 1);

// saving cart 
await cart.save()




   res.status(200).json({
    success :true , 
    cart, 
   })

 })





export  {
  addToCart ,
  getCart   ,
  deleteCart , 
  deleteItem , 

}