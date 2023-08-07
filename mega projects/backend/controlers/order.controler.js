import asynchandler from "../services/asynchandler.js";
import CustomError from "../utils/customError.js";
import {Order} from '../models/order.schema.js'
import {Product} from '../models/product.schema.js'
import { Coupon } from "../models/coupon.schema.js";
import Stripe from "stripe";
const stripe = new  Stripe(process.env.stripe_key)

const generateStripeOrderId = asynchandler (async (req, res ) => {
    const {products , couponCode  } = req.body  
    if (!products || products.length === 0) {
        throw new CustomError("No product found", 400)
    }


    let totalAmount = 0
    let discountAmount = 0


    // get product by db call and calculate price based on db call 


     let productPriceCalc = Promise.all (
         products.map( async (product) => {

         const producByDb = await Product.findById(product._id)
            if(!producByDb) {
                throw new CustomError("product not found" , 400)
            }

              if(producByDb.stock < product.count) {
                 throw new CustomError("out of stock" , 400)
              }

             totalAmount += producByDb.price * product.count;

         })
     )

     await productPriceCalc;

    // create payment intent 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099 * 100 , 
        currency: 'usd',
        payment_method_types: ['card'],
      });
    
      if(!paymentIntent) {
        throw new CustomError("payment not sucessfull" , 400)
      }


      res.status(200).json({
        sucess : true , 
        message : "payment intent created sucessfully " , 
        paymentIntent : paymentIntent.client_secret

      })


})









export  {
    generateStripeOrderId
}