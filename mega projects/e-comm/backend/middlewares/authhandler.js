import CustomError from "../utils/customError.js";
import asynchandler from "../services/asynchandler.js";
import JWT from "jsonwebtoken";
import { User } from "../models/user.schmea.js";


export const isLoggedIn = asynchandler(async (req, res, next) => {
    let token;

    if (req.cookies.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) ) {
        token = req.cookies.token || req.headers.authorization.split(" ")[1]
        
        // token = "Bearer gbhnjm235r5hbnj"
    }

    if (!token) {
        throw new CustomError("Not authorized to access this resource", 401)
    }

    
        const decodedJwtPayload = JWT.verify(token, process.env.SECRET);

         req.user = await User.findById(decodedJwtPayload._id, "name email role")
        //  console.log("from auth middleware ");
        //  console.log(req.user);
        //  console.log("from auth middleware ");

         next()
        if(!req.user) {

            throw new CustomError("Not authorized to access this resource", 401)
        }
    

    
})


// Define the authorize function
export const authorize = (...requiredRoles) => {
    return  function (req, res, next) {
      
        // Check if the user's role is included in the list of required roles
        if (!req.user || !requiredRoles.includes(req.user.role)) {
          // If req.user is undefined or the user's role is not in the required roles, throw an error

         return res.json({
           sucess : false ,
           error : ` ${req?.user?.role} are not allowed to access this resource`
          }
          )}

        // If the user's role is in the required roles, proceed to the next middleware/route handler
        
        next();
    }
    };

      