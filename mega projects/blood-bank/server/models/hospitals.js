import mongoose  from "mongoose";


const hospitaleschema = new mongoose.Schema ({
     
// we will add hero image  location and more feilds late this is "MVP" so keep it simple 
  name: {
    type: String,
    required: true,
  },

  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    required : [true, 'hospital address required'] 
  },
  contactPerson: {
    name: String,
    role: String,
    email: String,
    phone: String,
    required : [true, 'hospital contact person details  required'] 

    
  },
  bloodRequirements: {
    // You can define a separate schema for blood requirements if needed
    groups: [{ type: String }], // Blood groups required (e.g., ['A', 'B', 'AB', 'O'])
    rhFactors: [{ type: String }], // Rh factors required (e.g., ['Positive', 'Negative'])
    quantity: Number, // Preferred blood quantity in units
    urgency: String, // Urgency level (e.g., 'Urgent', 'Routine')
    usagePurpose: String, // Purpose of blood usage (e.g., 'Surgeries', 'Emergency')
    requiredDocumentation: String, // Any required documentation for blood collection
  },
});


    



const Hospital  =  mongoose.model("Hospital" , hospitaleschema) 


export  {
    Hospital
}


