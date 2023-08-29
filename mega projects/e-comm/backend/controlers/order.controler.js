import asynchandler from "../services/asynchandler.js";
import CustomError from "../utils/customError.js";
import {Order} from '../models/order.schema.js'
import {Product} from '../models/product.schema.js'
import {Cart} from '../models/cart.js'
import { UserAddress } from "../models/address.js";
import Stripe from "stripe";
const stripe = new  Stripe(process.env.stripe_key)

// getiing cart 



// getting adderss 


// calculating amount 
// hitting payment gateway api 
// sending secure url whic we get from payment gateway api
// order conformation 


const generateStripeOrderId = async (req, res ) => {


   

    
    const userId = req.user._id.toHexString()
   if(!userId) {
    throw new CustomError("log in to contenue " , 400)
   }

    // getting products from user  cart 
  const cartItems = await Cart.find({owner : userId})   

// checking cart have products 
if(!cartItems  || cartItems.length === 0 ) {
    throw new CustomError("no products found " , 400)

}



let totalAmount = 0

const productPriceCalc = Promise.all(
    cartItems[0].items.map( async ( item) => {

        const ProductFromDb = await Product.findById(item.productId)
         if(!ProductFromDb) {
            throw new CustomError("product not found" , 400)
         }

          if(1===11){
            throw new CustomError("product out of stock " , 401 ) }
        totalAmount += (ProductFromDb.price * item.quantity)
       
    })

)

  await productPriceCalc

console.log(totalAmount);

// create payment intent 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount , 
        currency: 'usd',
        payment_method_types: ['card'],
      });
    
      if(!paymentIntent) {
        throw new CustomError("payment not successfull" , 400)
      }


      res.status(200).json({
        success : true ,    
        message : "payment intent created successfully " , 
        paymentIntent : paymentIntent.client_secret

      })
       


}


// Todo: add order in database and update product stock

export const generateOrder = asynchandler(async(req, res) => {
    //add more fields below
    const {transactionId, products, coupon } = req.body
})

//Todo: get only my orders
export const getMyOrders = asynchandler(async(req, res) => {
    //
})

//Todo: get all my orders: Admin
export const getAllOrders = asynchandler(async(req, res) => {
    //
})

//Todo: update order Status: Admin
export const updateOrderStatus = asynchandler(async(req, res) => {
    //
})




export  {
    generateStripeOrderId, 
}