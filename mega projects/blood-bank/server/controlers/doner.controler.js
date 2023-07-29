import {Doner} from '../models/doner.js'
import {CustomError} from     '../services/customerror.js'
import asyncHandler from '../services/asyncHandler.js'


const createDoner = asyncHandler(async (req, res) => {

    const {
        name , 
        email,
        password,
        age,
        bloodgroup , 
        dateOfBirth ,
        contactNumber , 
         gender ,
         covid 

    } = req.body;
   console.log(req.body);
  
    // Data existence validation
    if ( 

      !name || !email || !password || !age   
      || !bloodgroup || !dateOfBirth || !contactNumber 
      || !gender || !covid

    ) {
      throw new CustomError("all fields required", 500, "some field not found");
    }
  
    // Type validation and type sanitization
  
    // Account existence validation
    const isDonerExist = await Doner.findOne({email});
  
    if (isDonerExist) {
      throw new CustomError("doner already registered", 500, "already have an account");
    }
  


    const data = {
      name :name , 
      email : email , 
      password : password , 
      requirments : {
        age :age , 
        bloodgroup : bloodgroup ,  
        dateOfBirth : dateOfBirth , 
        contactNumber :  contactNumber , 
        gender : gender , 
        vaccinationStatus : {
          covid : covid
        }  
    } }

    console.log(data);
    // Registering doner
    const doner = await Doner.create( data )


  
    // Checking if doner registered successfully
    if (!doner) {
      throw new CustomError("doner cannot be registered", 500, "issue in registering doner while we have valid data");
    }
  
    res.status(201).json({
      success: true,
      doner
    });
  });
  

const getOneDoner = asyncHandler(async (req, res ) => {
  const id = req.params.id 
  if(!id) {
    throw new CustomError("id not found " , 404  , "user is cuse")
  }
  const doner = await Doner.findById(id)  
  
if(!doner) {
  throw new CustomError("doner not found " , 400 ,  "issue when quering db ") 
}


 res.json({
  sucess : true , 
  doner
 })

})


const getAllDoners = asyncHandler (async(req, res ) => {

  const doners = await Doner.find() 


  if(!doners) {
    throw new CustomError('cnan not find doner list ' , 400 , "troubl;e in quering db ")
  }


  res.json({
    sucess : true  , 
    doners
  })

})


const deleteAll = asyncHandler(async (req, res) => {
  const allDeleted = await Doner.deleteMany() 
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
  const doner = await Doner.findByIdAndDelete(id)  
  
if(!doner) {
  throw new CustomError("doner not found " , 400 ,  "issue when quering db ") 
}


 res.json({
  sucess : true , 
  doner
 })

})


const update = asyncHandler (async (req, res ) => {
  const id = req.params.id 
   const data = req.body


const isDonerExist  =  await Doner.findById(id)

if(!isDonerExist) {
  throw new   CustomError("Doner not found " , 400 , "soem issue in provided id ") 
}

  const updated  = await Doner.findByIdAndUpdate(id , data , {new : true} ) 


res.json({
  sucess: true , 
  updated
})

  

})





export {
    createDoner , deleteAll , getOneDoner , getAllDoners , deleteOne , update   
}