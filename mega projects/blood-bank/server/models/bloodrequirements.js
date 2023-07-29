import mongoose from  'mongoose'


const bloodreqSchema =  mongoose.Schema({

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


// const BloodReq = mongoose.model("BloodReq" , bloodreqSchema)  // when we write schema for embedding we dont need to make model from it 

export{
    bloodreqSchema
}