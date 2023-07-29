import { Hospital } from "../models/hospitals.js";
import {CustomError} from '../services/customerror.js'
import asyncHandler from '../services/asyncHandler.js'


const createAccount = asyncHandler(async(req, res) => {


// getting data from user inputs 
const   {
Hospitalname,
street,
city,
state,
postalCode,
country ,
name ,
role,
email,
phone,
groups,
rhFactors,
quantity,
urgency,
usagePurpose,
requiredDocumentation
}   = req.body  

if(
    !Hospitalname ||
    !street ||
    !city ||
    !state ||
    !postalCode ||
    !country ||
    !name ||
    !role ||
    !email ||
    !phone ||
    !groups ||
    !rhFactors ||
    !quantity ||
    !urgency ||
    !usagePurpose ||
    !requiredDocumentation 
) {
    throw new CustomError("fill all fields" , 400 , "some fields are missing")
}

const data =  {

    Hospitalname: Hospitalname,
    address: {
      street:street ,
      city: city,
      state:state,
      postalCode: postalCode,
      country:country ,
    },
    contactPerson: {
      name: name, 
      role: role, 
      email : email , 
      phone: phone
    },
    bloodRequirements: {
      groups:groups ,  
      rhFactors:rhFactors ,
      quantity:quantity ,
      urgency: urgency,
      usagePurpose: usagePurpose , 
      requiredDocumentation:requiredDocumentation 
    }
  }

const isExist = await Hospital.findOne(
{
"contactPerson.email" : email ,
 Hospitalname :Hospitalname 
} 
 
 )


if(isExist) {
    throw new CustomError("hoipital already registerd " , 400 , "email matched with previos recods ")
}
const hosiptal= await  Hospital.create(data)



if(!hosiptal) {
    throw new  CustomError("hpospital account can not be creted " , 400 , "some data cause ")
}

res.json({
    sucess : true , 
    hosiptal
})


})



const deleteAllHospitals = asyncHandler(async(req, res) => {
    const deleted = await Hospital.deleteMany()
    
    res.status(200).json({
        sucess : true , 
        deleted 
    })
})


const deleteOneHospital = asyncHandler(async(req, res ) => {
    const id = req.params.id
    if(!id) {
        throw new CustomError("id not found " , 400 , "id not provided")
    }

    const deleted = await Hospital.findByIdAndDelete(id) 
    if(!deleted) {
        throw new CustomError("unable to delete " , 400 , "db error on deleting recod ")
    }
})

const  AllHospitals  = asyncHandler(async(req, res ) => {
    const all =  await Hospital.find()
    if(!all) {
        res.ststus(200).json({
            sucess : true , 
            all

        })
    }
})


const getOneHospital = asyncHandler(async(req, res ) => {
    const id = req.params.id
    if(!id) {
        throw new CustomError("id not found " , 400 , "id not provided")
    }

    const hospital = await Hospital.findById(id) 
    if(!hospital) {
        throw new CustomError("unable to delete " , 400 , "db error on deleting recod ")
    }
})


const updateHosipital = asyncHandler(async (req , res) => {
    const id = req.params.id
    const data = req.body
    if(!id) {
        throw new CustomError("id not found " , 400 , "id not provided")
    }

    const updated = await Hospital.findByIdAndUpdate(id, data , {new : true })
    if(!updated) {
        throw new CustomError("unable to update " , 400 , "db error on updating recod")
    }



})








export {
    createAccount, 
    deleteAllHospitals , 
    AllHospitals , 
    deleteOneHospital,
    getOneHospital, 
    updateHosipital
}
