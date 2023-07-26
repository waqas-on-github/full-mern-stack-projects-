import mongoose from "mongoose";


  const fileschema = mongoose.Schema({
    photo :[ 
      {
      secur_url : {
        type : String , 
        required : true
    }}
]
  })



  const File = mongoose.model("File" , fileschema)


  export {
    File
  }