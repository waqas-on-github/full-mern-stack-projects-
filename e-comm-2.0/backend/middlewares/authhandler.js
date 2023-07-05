import { User } from "../models/user.schmea.js";
import Jwt  from "jsonwebtoken";
import asynchandler from "../services/asynchandler.js";
import CustomError from "../utils/customError.js";


const isloggedin  = asynchandler ( async (req, res , next ) => {

let token ;
if(res.cookies.token || (res.headers.authorization && res.headers.authorization.startswith("Bearer") ))
{
    token = res.cookies.token || res.headers.authorization.split(" ")[1]
   
}

if (!token) {
    throw new CustomError("Not authorized to access this resource", 401)
}

try {
     const decodejwtpayload = Jwt.verify(token , process.env.SECRET)
     req.user = await User.findById(decodejwtpayload._id , "name email role" )
     next()
} catch (error) {
    throw new CustomError("Not authorized to access this resource", 401)
}

    next()
} )

const authorize = (...requiredRoles) => asynchandler( async (req, res, next) => {
    if (!requiredRoles.includes(req.user.role)) {
        throw new CustomError("You are not authorized to access this resource")
    }
    next()
})













export {
    isloggedin,authorize
}