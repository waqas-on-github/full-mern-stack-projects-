import mongoose from "mongoose";


const orderschema = mongoose.Schema({
  product : {
     ref :"Cart", 
     type : mongoose.Schema.Types.ObjectId
  }, 


  user  : {
    ref: "User" , 
    type :  mongoose.Schema.Types.ObjectId , 
    required : true 
  } 

  , address : {
    ref :"Address"
    , type : mongoose.Schema.Types.ObjectId
  }, 

  coupon  : String , 
  transitionId :  String , 

  status : {
    type : String , 
    enum : ["ORDERD" , "SHIPPED" , "DELIVERD" , "CENCELD"] 
    ,default : "ORDERD"
  }






} , {timestamps : true})



const Order = mongoose.model("Order" , orderschema)


export {
    Order
}




