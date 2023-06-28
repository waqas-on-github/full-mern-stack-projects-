import mongoose from "mongoose";

 const Productschema  = mongoose.Schema ({

    name :  {
        type : String , 
        required : [ true ,"product name is required"] ,  
        trim : true 
    },

    description : {
        type : String , 
        required : [ true ,"product description  is required"] 

    },  
 

     price : {
        type : Number , 
        required : [true , "product price is required"]
     } , 

     rating  : {
        type : Number , 
        default : 0
     }, 

    images : [{

        public_id : {
            type : String,
            required : [true ,' images are requrired' ]
        } , 
        url: {
            type : String,
            required : true
        }
    } ], 


    vendors  : [ {
        required : [true , " we need vendor name "] ,
        type :String
    }]
,
    catagory : {
        type: String , 
        required : [true , 'please enter product catagory']
    } , 

    stock : {
        type : Number , 
        required : [true , "please enter product stock"],
        maxlength : [4 , "stock can't exceed more the 4 characters"] ,
        default : 1
    },

   numberofReviews  : {
    type :Number    , 
    default : 0 
   },

   reviews : [
    { 
      name : {
        type : String , 
        required :true
      }, 
       
      rating : {
        type:  Number , 
        required : true  
      }, 
      comment : {
        type : String , 
        required : true
      }

     }
   ]

 } , {
    timestamps : true 
 } )
 

 const Product  = mongoose.model( 'Product' , Productschema )

 export {
    Product
 }
