import mongoose from "mongoose";


const userschema = new mongoose.Schema({
  
    username : {
        type: String , 
        required : true ,
        uniuqe : true 
    }
,
 
       
    password :  {
        type: String , 
        required : true ,
        uniuqe : true 
    }

,      roles : [{
          type: String , 
          default : "Employee"
    }]

, 
      active : {
        type :Boolean , 
        default :true 

      }

})


const User  = mongoose.model('User' , userschema)

export {
    User    
}