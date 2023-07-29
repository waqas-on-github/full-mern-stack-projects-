import mongoose  from "mongoose";


const hospitaleschema =  mongoose.Schema ({
     
// we will add hero image  location and more feilds late this is "MVP" so keep it simple 
  Hospitalname: {
    type: String,
    required: true,
  },

  address: {
        street:
        {  type: String,
           required :true
        },

        city: 
        { type: String ,
           required :true
        },

        state:
        {  type: String,
           required :true
        },

        postalCode:
        {  type: String,
           required :true
        },
        
        country:
        {  type: String,
           required :true
        },
  },
  contactPerson: {
         name:  
         {  type : String ,
              required :true
         },
         role:  
         {  type : String ,
              required :true
         },
         email: 
         {   type : String ,
              required :true
         },
         phone: 
         {   type : String ,
              required :true
         },

    
  },
  bloodRequirements: {
    // You can define a separate schema for blood requirements if needed
    groups:{ 
      type : [
        
        {
           type: String  , 
           required : true  
        }
      
      ]

    
    }, // Blood groups required (e.g., ['A', 'B', 'AB', 'O'])
    rhFactors: [{ type: String , required : true  }], // Rh factors required (e.g., ['Positive', 'Negative'])
    quantity: {  type :  Number , required : true }, // Preferred blood quantity in units
    urgency: {  type:  String , required : true}, // Urgency level (e.g., 'Urgent', 'Routine')
    usagePurpose: { type :  String , required : true }, // Purpose of blood usage (e.g., 'Surgeries', 'Emergency')
    requiredDocumentation:  {type : String , required : true } // Any required documentation for blood collection
  },

//  doners :
//  {
//  type : [
//   {
//     type: mongoose.Schema.Types.ObjectId, 
//     ref : "Doner" , 
//     required : [true , "doner id is required" ]
//   }
//  ], 


//  validate : {
//   validator :  function (val) {
//     return Array.isArray(val) && val.length > 0 
//   }, 
//    message : " at least one id is required" 
//  }
//  }


});


    



const Hospital  =  mongoose.model("Hospital" , hospitaleschema) 


export  {
    Hospital
}


