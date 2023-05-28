import jwt from 'jsonwebtoken';

function geteratetoken (res, payload ) {

    const token = jwt.sign( payload , process.env.SECRET ,{expiresIn:'30d'})
 
    res.cookie('token', token)
      

  
}

export {
    geteratetoken
}