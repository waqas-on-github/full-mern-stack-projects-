import {CustomError} from     '../services/customerror.js'
import { User } from '../models/user.js';
import asyncHandler from '../services/asyncHandler.js'


const createUser = asyncHandler(async (req, res) => {

    const { name , email, password, role  } = req.body;
   console.log(req.body);
  
    // Data existence validation
    // if ( 

      // !name || !email || !password  || !role  || !age   
      // || !bloodgroup || !dateOfBirth || !contactNumber 
      // || !gender || !covid

    // ) {
      // throw new CustomError("all fields required", 500, "some field not found");
    // }
  
    // Type validation and type sanitization
  
    // Account existence validation
    const isUserExist = await User.findOne({email});
  
    if (isUserExist) {
      throw new CustomError("user already registered", 500, "already have an account");
    }
  


    const data = {
      name :name , 
      email : email , 
      password : password , 
      role : role , 
      
  }

  
    // Registering user
    const user = await User.create( data )


  
    // Checking if user registered successfully
    if (!user) {
      throw new CustomError("user cannot be registered", 500, "issue in registering user while we have valid data");
    }
  
    res.status(201).json({
      success: true,
      user
    });
  });
  

const getOneUser = asyncHandler(async (req, res ) => {
  const id = req.params.id 
  if(!id) {
    throw new CustomError("id not found " , 404  , "user is cuse")
  }
  const user = await User.findById(id)  
  const newtest = await user.test()
  console.log(newtest);
if(!user) {
  throw new CustomError("user not found " , 400 ,  "issue when quering db ") 
}


 res.json({
  sucess : true , 
  user
 })

})


const getAllUsers = asyncHandler (async(req, res ) => {

  const user = await User.find() 
;
  if(!user) {
    throw new CustomError('cnan not find user list ' , 400 , "troubl;e in quering db ")
  }


  res.json({
    sucess : true  , 
    user
  })

})


const deleteAll = asyncHandler(async (req, res) => {
  const allDeleted = await User.deleteMany() 
  if(!allDeleted) {
    throw new CustomError("not deleted " , 400 , "db cause ")
  }

  res.json({
    sucess : true , allDeleted
  })
})

const deleteOne = asyncHandler(async (req, res ) => {
  const id = req.params.id 
  if(!id) {
    throw new CustomError("id not found " , 404  , "user is cuse")
  }
  const user = await User.findByIdAndDelete(id)  
  
if(!user) {
  throw new CustomError("user not found " , 400 ,  "issue when quering db ") 
}


 res.json({
  sucess : true , 
  user
 })

})


const update = asyncHandler (async (req, res ) => {
  const id = req.params.id 
   const data = req.body


const isUserExist  =  await User.findById(id)

if(!isUserExist) {
  throw new   CustomError("user not found " , 400 , "soem issue in provided id ") 
}

  const updated  = await User.findByIdAndUpdate(id , data , {new : true} ) 


res.json({
  sucess: true , 
  updated
})

  

})





export {
    createUser , deleteAll , getOneUser , getAllUsers , deleteOne , update   
}