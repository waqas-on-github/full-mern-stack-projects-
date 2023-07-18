import { User } from "../models/user.schmea.js"
import CustomError from "../utils/customError.js"
import asynchandler from "../services/asynchandler.js"

const cookieoptions = { 
  httpOnly : true   , 
  expires :new Date (Date.now()+ 3*24*60*60*1000 )
   , Secure : true 

}

const signup  = asynchandler(  async (req, res) =>  {
/******************************************************
 * @SIGNUP
 * @route http://localhost:5000/api/auth/signup
 * @description User signUp Controller for creating new user
 * @returns User Object
 ******************************************************/

  // get data from user
   const {name , email ,password , role}   = req.body
  // validation  
   if((!name || !email ||  !password)) {
    throw new  CustomError("please add all fields" , 400 )
   }

   const userexist = await User.findOne({email})
   
   if(userexist) {
    throw new  CustomError ("user already exist" , 400 )
   }
  //  lets add this data to db 
   
    const user = await User.create({
      name  ,  email, password , role 
    })
   
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
  if(!user) {
    throw new  CustomError("invalid craditionals" , 400)
  }

  const ispasswordmatched = user.comparepass(password)
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


export {
     signup ,
     login, 
     logout,
     deleteallusers , 
     getprofile , 
     getAllusers
   }