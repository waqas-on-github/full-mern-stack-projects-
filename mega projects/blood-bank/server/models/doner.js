import mongoose from "mongoose";
import { bloodreqSchema } from "./bloodrequirements.js";
// genral user schema fields needed  
// name , email password , forgotpass , resetpass for now .. 

const donerchema =  mongoose.Schema({
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
requirments : {
    
type : bloodreqSchema ,  
required : true     

}


})

const Doner = mongoose.model("Doner" , donerchema)


export {
    Doner
}

