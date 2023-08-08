import mongoose from "mongoose";
// genral user schema fields needed  
// name , email password , forgotpass , resetpass for now .. 

const userSchema =  mongoose.Schema({
   name : {
    type :String , 
    required : [ true , "doner name is required"] 
   },
   
   email : {
       type :String , required : [ true , "email is required"] 
   
   } , 
   password : {
   type :String , 
   required : [true ,' password is required '], 
   minLength: [ 8, " at least 8 chars long "] , 
   select : false 
   }
, 

   forgotpass :String , 
   resetpass : String , 


})



userSchema.methods.test = function () {
    return "for user and donor";
};

const User = mongoose.model("User" , userSchema)

export {
    User
}

