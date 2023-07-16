import mongoose from "mongoose";

 const Productschema  = mongoose.Schema ({

    name :  {
        type : String , 
        required : [ true ,"product name is required"] ,  
        maxlength : [120  , " product name  should not be more then 120 chars "] ,
        trim : true , 
        unique : [true , "product name must be unique " ]
    },

     description : {
         type : String , 
         required : [ true ,"product description  is required"] 
     },  

      price : {  
         type : Number , 
         required : [true , "product price is required"] , 
         maxlength : [5 , "product price shoud note be more then 5 chars"]
      } , 

      rating  : {
         type : Number , 
         default : 0
      }, 

photos :  {
      
      type :[{

       secure_url : {
            type : String,
            required : [true ,' images are requrired' ]
        } 
    } ] , 
  
   validate : {
    validator :  function(photos) {
      return photos.length >0 
     },      message : " at least one photo is required"
    }
  
   }, 

     catagory : {
         type: String , 
         required : [true , 'please enter product catagory']
     } , 

     stock : {
         type : Number , 
         required : [true , "please enter product stock"],
         maxlength : [4 , "stock can't exceed more the 4 characters"] ,
         default : 0
     },
     sold : {
       type : Number , 
       required : [true , "please enter product stock"],
       maxlength : [4 , "stock can't exceed more the 4 characters"] ,
       default : 0
   },
   

   collectionId :  {
     ref : "Collection" , 
     type : mongoose.Schema.Types.ObjectId,
     required : [true , "collection id is required"]
   }
  
 ,
  

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
