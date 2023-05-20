import mongoose from "mongoose";
import AutoIncrement from 'mongoose-sequence';




const notesschema  = new mongoose.Schema ({
 
    user: {
        type : mongoose.Schema.Types.ObjectId, 
        required :true , 
        ref : "User"
    }, 
    title : {
        type : String ,
        required : true 
    }, 
    text : {
        type : String , 
        required : true 
    },
    completed : {
        type : Boolean , 
        required : true
    }


} , {
    timestamps :true 
})



const Note = mongoose.model("Note" , notesschema)


export {
    Note
}