import mongoose from "mongoose";
import { authroles } from "../utils/AuthRoles.js";
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken";
import crypto from  'crypto'

const userschema = mongoose.Schema (
    {

         name : {
            type : String , 
            required : [true , "user name is required" ]
            ,maxLength : [50 , "name must be less then 50 chars "]
         } , 

         email :{ 
            type : String , 
            required : [true , "email is required"]
            ,uniuqe : [true , "email must be uniuqe" ]
         } , 
         password  : {
            type : String , 
            required : [true , 'password  is required'] , 
            minLength : [8 , 'password atleast should have eight chars']
            , select : false
         }, 
        role : {
            type : String , 
            enum : Object.values(authroles), 
            default : authroles.USER
        } , 

        frogotPasswordToken : String , 
        frogotPasswordExpairy : Date 






    } , 
    {timestamps : true}
)


userschema.pre ( "save" , async function (next) {
    if(!this.isModified('password')){
        return(next)
    } 

  try {
     this.password = await bcrypt.hash(this.password , 10 )
     next()
  } catch (error) {
    return next(error)
    
  }




}) ; 

userschema.methods={
    comparepass : async function(pass) {
    return await bcrypt.compare(pass ,  this.password )
} ,

    getJWTtoken : function () {
       return  Jwt.sign({_id:this._id}  , process.env.SECRET  , { expiresIn : '24h'})
    } ,

  generateforgotpasswordtoken : function () {

     // generate token 
     const forgotToken = crypto.randombytes(20).tostring('hex') 
    // encrypt generated toke by crypto 
    this.frogotPasswordToken = crypto .createHash("sha256").update(forgotToken).digest('hex')
    // time for token to expire 
    this.frogotPasswordExpairy = Date.now()  + 20 * 60 * 1000
   
    return forgotToken  

    } 

} ;

const  User  = mongoose.model ("User"  , userschema)

export {
    User
}