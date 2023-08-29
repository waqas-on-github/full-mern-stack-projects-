import { UserAddress } from "../models/address.js";
import asynchandler from "../services/asynchandler.js";
import CustomError from "../utils/customError.js";


const createAddress = asynchandler(async (req, res) => {
// getting user info 
const user = req.user._id.toHexString()

// user validation 
if(!user) {
    throw new CustomError("user needed of adding address" , 401)
}

// getting addresss from requset body
const {   street ,city, state ,zipCode } = req.body    

// adress data validation 
if(!street || !city   ||  !state || !zipCode ){
    throw new CustomError("address in incomplete please fill address prperly " , 400 )
}

// prepared data for db 
const   data = {
    owner: user , street , city, state , zipCode

}

// checking if user already have address

const hasAddress = await UserAddress.findOne({owner : user})


//   user address validation 
 if(hasAddress) {
     throw new CustomError("user already have address " , 400)
 }




// creating new address if user dont have 
const useraddress = await UserAddress.create(data)

 if(!useraddress) {
     throw new CustomError("address cannot be created for some reason " , 401)
 }


res.status(201).json({
    sucess : true , 
    useraddress
})

})


 const getUserAddress  = asynchandler(async(req, res) => {
  const userId = req.user._id.toHexString()

  const address = await UserAddress.findOne({owner : userId })

  if(!address) {
    throw new CustomError(`${req.user.name } has not added address yet` , 400)
  }


  res.status(200).json({
    sucess : true , 
    address
  })

})


const updateUserAddress = asynchandler(async(req, res ) => {
    const data = req.body

const userId = req.user._id.toHexString()
if(!userId) {
    throw new CustomError("user not found " , 400)
}

const updateAddress = await UserAddress.findByIdAndUpdate(userId , data  , {new :true})
if(!updateAddress) {
    throw new CustomError("can not be updated " , 400)
}


res.status(201).json({
    sucess:  true , 
    updateAddress 
})

})





export {
    createAddress,
    getUserAddress, 
    updateUserAddress

}