import mongoose from "mongoose";


  const fileschema = mongoose.Schema({
    photo :  {
        type : String , 
        required : true
    }
  })



  const File = mongoose.model("File" , fileschema)


  export {
    File
  }