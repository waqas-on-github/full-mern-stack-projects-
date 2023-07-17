 
 import asynchandler from "../services/asynchandler";
 import Coupon  from '../models/coupon.schema.js'
 import CustomError from "../utils/customError";


 // create coupon  


const createCoupon = asynchandler(async(req, res ) => {

    const {code,discoount , status} = req.body  


    // validatin data got from request 
    if( !code ||!discoount || !status) {
        throw new CustomError("all fields required" , 400) 
    }


    // checking if coupon already exist 
    const isCouponExist =  await Coupon.findOne({code})
    if(isCouponExist) {
        throw new CustomError("coupon already exist " , 400) 
    }


    const coupon =  await Coupon.create(req.body) 

   if(!coupon) {
    throw new CustomError("coupon can't be created " , 400) 

   }  


   res.json ({
    sucess: true ,  
    coupon
   })

})


const updateCoupen = asynchandler(async(req, res ) => {
    const couponid = req.params.id 


    const {code,discoount , status} = req.body  

    // validatin data got from request 
    if( !code ||!discoount || !status) {
        throw new CustomError("all fields required" , 400) 
    }
    const coupon = await Coupon.findOne(couponid)
    if(!coupon) {
        throw new CustomError("coupon not found " , 400)
    }

    



  })


const deletecoupon = asynchandler(async(req, res ) => {
    
  })

const  getAllCoupons = asynchandler(async(req, res ) => {
    
  })

const getOnecoupon = asynchandler(async(req, res ) => {
    
  })




  export {
    createCoupon ,
     getAllCoupons ,
      getOnecoupon ,
       updateCoupen ,
        deletecoupon
  }