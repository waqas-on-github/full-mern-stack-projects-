import jwt from 'jsonwebtoken';




function geteratetoken (res, payload ) {

    const token = jwt.sign( payload , process.env.SECRET ,{expiresIn:'30d'})
 
   res.cookie('token' , token ,  { 
    httponly:true , 
    samesite : 'strict', 
    secure : process.env.NODE_ENV !=='dev'

   })

}

export {
    geteratetoken
}