import mongoose from "mongoose";


const orderschema = mongoose.Schema({
  product : {
    type : [
        {
            productId  : {
                ref : "Product" , 
                type : mongoose.Schema.Types.ObjectId
            }, 
            count : Number , 
            price : Number 
        }
    ]
  }, 


  user  : {
    ref: "User" , 
    type :  mongoose.Schema.Types.ObjectId , 
    required : true 
  } , 

  address : {
    type:String , 
    required :true
  } , 
  
  amount  :{
    type : Number , 
    required : true 
  } , 
  phone : {
    type  : Number ,
     required : true
  }  , 

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




