import { User } from "../models/user.schmea.js"
import CustomError from "../utils/customError.js"
import asynchandler from "../services/asynchandler.js"
import {mailHelper }from '../utils/mailhelper.js'
import Crypto from   'crypto'

const cookieoptions = { 
  httpOnly : true   , 
  expires :new Date (Date.now()+ 3*24*60*60*1000 )
  //  , Secure : true 

}

const signup  = asynchandler(  async (req, res) =>  {
/******************************************************
 * @SIGNUP
 * @route http://localhost:5000/api/auth/signup
 * @description User signUp Controller for creating new user
 * @returns User Object
 ******************************************************/

  // get data from user
   const {name , email ,password , role  }   = req.body
   console.log(req.body);
  // validation  
   if((!name || !email ||  !password  || !role)) {
    throw new  CustomError("please add all fields" , 400 )
   }

   const userexist = await User.findOne({email})
   
   if(userexist) {
    throw new  CustomError ("user already exist" , 400 )
   }
  //  lets add this data to db 
   
    const user = await User.create({
      name  , email, password , role
    })
   

    // console.log(user);
    if(!user) {
      throw new CustomError("can not create user " , 400)
    }

    const token = await user.getJWTtoken()

  //  safety 
  user.password =undefined
  res.cookie("token" , token  , cookieoptions)

 return  res.status(201).json({
    sucess  : true , 
    token , 
    user
   })

  })

/*********************************************************
  * @LOGIN
  * @route http://localhost:5000/api/auth/login
  * @description User Login Controller for signing in the user
  * @returns User Object
  *********************************************************/

const login  = asynchandler(async (req, res) => {
 
 const {email, password} = req.body
    if(!email || !password) {
     throw new  CustomError("please provide all fields" , 500 )
    }
   
  const user =  await User.findOne({email}).select("+password") 
  console.log(user);
  if(!user) {
    throw new  CustomError("invalid craditionals" , 400)
  }

  const ispasswordmatched = await  user.comparepass(password)


  if(ispasswordmatched) {
    const token =  await user.getJWTtoken()
     user.password = undefined , 
     res.cookie('token' , token , cookieoptions) ;
   return res.status(201).json({
      sucess  : true , 
      token , 
      user
     })
  }


throw  new CustomError('wrong password' , 400)
   

 } )

/**********************************************************
 * @LOGOUT
 * @route http://localhost:5000/api/auth/logout
 * @description User Logout Controller for logging out the user
 * @description Removes token from cookies
 * @returns Success Message with "Logged Out"
 **********************************************************/

 const logout = asynchandler(async (req, res) => {
  res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true
  })

  res.status(200).json({
      success: true,
      message: 'Logged Out'
  })
})

const getprofile = asynchandler(async(req, res) => {
  const user = req.user  
 
  if(!user ) {
    throw new CustomError(" user not found " , 401 )
  }

   res.status(200).json({
     sucess : true , 
     profile : user
   })
})
  
const  deleteallusers =   asynchandler( async(req  , res) => {
  const deleted =  await User.deleteMany({})
   if(!deleted) {
    throw new CustomError("can not delete items " , 400)
   }

   res.json({
    deleted :  true  , 
    deleted
   })

})

const getAllusers = asynchandler(async (req, res ) => {
   
  const users = await User.find()

  if(!users) {
   throw new  CustomError("users not found " , 400)
  }

  res.status(200).json({
    success : true , 

    users
  })
  
})

const forgotPasswoed = asynchandler(async(req, res ) => {
 // so user forgot his password   
  // let get user info with email 
   const  {email} =req.body

   console.log(req.body);

   const user = await User.findOne({email}) 

   if(!user) {
    throw new CustomError("user not found" , 404)
   }


   // so we know user exist 

   // we have forgopasswordtoken in user sechema so lets genrate token 
   const resetToken =  user.generateforgotpasswordtoken()
     
   console.log(resetToken);

  
   // lets save token in db 
   await user.save({validateBeforeSave : false})

   // create reset password 

   const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/users/password/reset/${resetToken}`


   const message = `your reset password url us as folows \n\n\n\n\ ${resetUrl}\n\n\n\n\ if this is not requseted by you please ignore`

   try {
     
    
    await mailHelper({ 
      email : user.email , 
      subject :"password change request" , 
      text:  message
     })
     
   } catch (error) {
      
    user.forgotPasswordToken = undefined
    user.forgotPasswordExpiry = undefined

    await user.save({validateBeforeSave: false})

    throw new CustomError(error.message || "Email could not be sent", 500)


   }
   

res.json({
  sucess : true, 
  message :  'email sended sucessfuly check you inbox'
})

})

const resetpassword = asynchandler(async (req, res ) => {
// get token from weve send throught email url 
  const token = req.params.id 
  const {password , confirmpassword } = req.body 


 const reset_token = Crypto.createHash("sha256").update(token).digest('hex')
 

  const user = await User.findOne({ frogotPasswordToken:reset_token})
  console.log(user);

if (!user) {
    throw new CustomError( "password reset token in invalid or expired", 400)
}

if (password !== confirmpassword) {
    throw new CustomError("password does not match", 400)
}


user.password = password,
user.frogotPasswordToken = undefined,
user.frogotPasswordExpairy = undefined

 const  result = await user.save()
 console.log(result);

// optional

const jwttoken = user.getJWTtoken()
 res.cookie("token", jwttoken, cookieoptions)

res.status(200).json({
    success: true,
    user, //your choice
})

})


// todo later some time 
const updateuser = asynchandler(async(req, res) => {
  res.send("updating .... ")
})
export {
     signup ,
     login, 
     logout,
     deleteallusers , 
     getprofile , 
     getAllusers ,
     updateuser , 
     forgotPasswoed , 
     resetpassword
   }


   