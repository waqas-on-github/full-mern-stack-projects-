import mongoose from "mongoose";

const collectionschema  = mongoose.Schema({ 

    name :  {
        type : String , 
        required : [ true ,"product name is required"] ,  
        maxlength : [120  , " product name  should not be more then 120 chars "] ,
        trim : true 
    },

})


const Collection = mongoose.model(" " , collectionschema)

export {
    Collection
}

