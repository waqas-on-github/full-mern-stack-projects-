import mongoose from  'mongoose'


const bloodreqSchema = new mongoose.Schema({

  age :{
    type : Number , 
    min :18 , max: 65
  }, 

  bloodgroup : {
    type    : String
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
    covid: Boolean 
  }, 

  isDeferred: {
    type: Boolean,
    required: true,
  },
//   
  deferralReason: {
    type: String,
    default: null,
    validate: {
      validator: function (value) {
        if (this.isDeferred) {
          // If isDeferred is true, the deferralReason field is required
          return value && value.trim() !== '';
        }
        // If isDeferred is false, the deferralReason field can be null (default value)
        return true;
      },
      message: 'Deferral Reason is required when donor is deferred.',
    },
  },


});


const BloodReq = mongoose.model("BloodReq" , bloodreqSchema)
export{
    BloodReq
}