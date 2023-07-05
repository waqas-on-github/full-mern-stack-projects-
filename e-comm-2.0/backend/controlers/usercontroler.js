import { User } from "../models/user.schmea.js"
import CustomError from "../utils/customError.js"
import asynchandler from "../services/asynchandler.js"


const signup  = asynchandler(  async (req, res) =>  {
  const cookieoptions = { 
    httpOnly : true   , 
    expires :new Date (Date.now()+ 3*24*60*60*1000 )

  }
/******************************************************
 * @SIGNUP
 * @route http://localhost:5000/api/auth/signup
 * @description User signUp Controller for creating new user
 * @returns User Object
 ******************************************************/

  // get data from user
   const {name , email ,password}   = req.body
  // validation  
   if((!name || !email ||  !password)) {
    throw new  CustomError("please add all fields" , 400 )
   }

   const userexist = User.findOne({email})
   if(userexist) {
    throw new  CustomError ("user already exist " , 400 )
   }
  //  lets add this data to db 
   
    const user = User.create({
      name  ,  email, password
    })
    const token = user.getJWTtoken()
  //  safety 
  user.password =undefined
  res.cookies("token" , token  , cookieoptions)

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
   
  const user = user.findOne({email}).select("+password") 
  if(!user) {
    throw new  CustomError("invalid craditionals" , 400)
  }

  const ispasswordmatched = user.comparepass(password)
  if(ispasswordmatched) {
    const token = user.getJWTtoken()
     user.password = undefined , 
     res.cookies('token' , token , cookieoptions) ;
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



  






export {
     signup ,
     login, 
     logout
   }