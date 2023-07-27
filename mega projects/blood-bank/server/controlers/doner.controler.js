import {Doner} from '../models/doner.js'
import {CustomError} from     '../services/customerror.js'
import asyncHandler from '../services/asyncHandler.js'


const createUser = asyncHandler(async (req, res) => {

    const {
        name , 
        email,
        // password,
        // age,
        // bloodgroup,
        // dateOfBirth,
        // contactNumber ,
        // gender,
        // covid,
        // isDeferred,
        // deferralReason
    } = req.body;

    console.log(req.body);
  
    // Data existence validation
    if (
       !name || !email 
      //  !password ||
      //  !age ||
      //  !bloodgroup ||
      //  !dateOfBirth ||
      //  !contactNumber ||
      //  !gender ||
      //  !covid ||
      //  !isDeferred ||
      //  !deferralReason 
      
    ) 
    
    {
      throw new CustomError("all fields required", 500, "some field not found");
    }
  
    // Type validation and type sanitization
  
    // Account existence validation
    const isDonerExist = await Doner.findOne({email});
  
    if (isDonerExist) {
      throw new CustomError("doner already registered", 500, "already have an account");
    }
  
    // Registering doner
    const doner = await Doner.create(req.body);
  
    // Checking if doner registered successfully
    if (!doner) {
      throw new CustomError("doner cannot be registered", 500, "issue in registering doner while we have valid data");
    }
  
    res.status(201).json({
      success: true,
      doner
    });
  });
  



export {
    createUser
}