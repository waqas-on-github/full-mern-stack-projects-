 
 import asynchandler from "../services/asynchandler.js";
 import {Coupon}  from '../models/coupon.schema.js'
 import CustomError from "../utils/customError.js";


 // create coupon  


const createCoupon = asynchandler(async(req, res ) => {

    const {code,discoount } = req.body  


    // validatin data got from request 
    if( !code ||!discoount ) {
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
    success: true ,  
    coupon
   })

})


const updateCoupen = asynchandler(async(req, res ) => {
    const couponid = req.params.id 


    const {code,discoount } = req.body  

    // validatin data got from request 
    if( !code ||!discoount ) {
        throw new CustomError("all fields required" , 400) 
    }
    const coupon = await Coupon.findOne(couponid)

    if(!coupon) {
        throw new CustomError("coupon not found " , 400)
    }
    

    const updated =  new Coupon ({
      code , discoount
    })
    
 const goupdated =  await updated.save()

 if(!goupdated)
 {
  throw new CustomError("can not update coupon " , 400)
 }

  
  res.status(200).json({
    success : true , 
    goupdated
  })

  })


const deletecoupon = asynchandler(async(req, res ) => {
   const id= req.params.id   


   const isCodeExist = await Coupon.findById(id) 
   if(!isCodeExist  ) {
    throw new CustomError(" coupon dont exist " , 400)
   } 

   const deleted = await Coupon.findByIdAndDelete(id)

   if(!deleted) {
    throw new CustomError("coupon can not be deleted" , 400 ) 
   } 
  res.status(200).json({
    success : true , 
    deleted
  })

  })

const  getAllCoupons = asynchandler(async(req, res ) => {
    
  
  const allCoupons  =  await Coupon.find({}) 
  if(!allCoupons) {
    throw new CustomError(" coupons not found " , 400)
  }
  res.status(200).json({
    success : true , 
    allCoupons
  })

  })

const getOnecoupon = asynchandler(async(req, res ) => {
    const  id = req.params.id   
    const coupon = await Coupon.findById(id) 
    if(!coupon) {
      throw new CustomError("coupon not found " , 400)
    }
   

    res.status(200).json({
      success: true  , coupon
    })

   })


   const deleteAll = asynchandler( async ( req, res ) => {
       const alldeleted= Coupon.deleteMany()
       if(!alldeleted) {
        throw new CustomError(" can not delete " , 400)
       }

       res.status(200).json({
        success:true , 
        alldeleted
       })
   })



  export {
    createCoupon ,
     getAllCoupons ,
      getOnecoupon ,
       updateCoupen ,
        deletecoupon,
         deleteAll
  }