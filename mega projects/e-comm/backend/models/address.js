import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({


  owner : {
     ref : "User" , 
     type :  mongoose.Schema.Types.ObjectId,
     required : true, 
     unique: true
  }, 

 street: {
    type: String,
    required: true,
  },
 city: {
    type: String,
    required: true,
  },
 state: {
    type: String,
    required: true,
  },
 zipCode: {
    type: String,
    required: true,
  }

})



const UserAddress = mongoose.model("UserAddress" , addressSchema)
export {
    UserAddress
}