import mongoose from  'mongoose'
import { User } from './user.js';


const donerSchema =  mongoose.Schema({

  age :{
    type : Number , 
    min :18 , max: 65 , 
    required :true 
  }, 

    bloodgroup : {
      type    : String
      ,required :true 

    } , 
    dateOfBirth: {
      type: Date,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    }, 
    vaccinationStatus : {

      covid:{
       type : Boolean 
      ,required :true
     }

    }, 

  

});


const Doner  = User.discriminator("Doner" , donerSchema)



export {
  Doner
}