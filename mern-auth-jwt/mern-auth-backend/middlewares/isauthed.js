
import jwt from "jsonwebtoken";
import {User} from '../models/usermodel.js'

 async function isauthed (req, res , next ) {
    const token = req.cookies.token;
  
    if(token) {
      try {
        const decoded = jwt.verify(token , process.env.SECRET)
      
        req.user = await User.findById(decoded.id).select('-password')
        next()
      } catch (error) {
        res.status(401) 
        next(error)
        
      }
    }
    else {
        res.status(401);
        res.json({ status :"not token found "})

    }}

  
    









export{
    isauthed
}
