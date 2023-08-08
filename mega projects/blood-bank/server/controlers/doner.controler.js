
import { Doner } from "../models/doner.js";
import asyncHandler from "../services/asyncHandler.js";
import { CustomError } from "../services/customerror.js";



const createDoner = asyncHandler(async(req, res) => {

   const doner = await Doner.create(req.body) 
   const newtest = await doner.test() 
   console.log(newtest);
   if(!doner) {
    throw new CustomError("unable to create doner " , 400 ,  "uncoming data error")
   }
   

   res.status(201).json({
    sucess : true , 
    doner
   })

})






export {
    createDoner
}