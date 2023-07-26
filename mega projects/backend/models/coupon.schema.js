import mongoose from "mongoose";


const couponschema = mongoose.Schema  ({ 
code  : {
    type : String , 
    required : [ true , "coupon code is required"] 
} 
,
discoount : {
    type : Number , 
    default :0
}  , 
  status : {
    type :Boolean , 
    default : true
  }

} , {timestamps : true})

const Coupon = mongoose.model("Coupon" , couponschema) 


export {
    Coupon
}



