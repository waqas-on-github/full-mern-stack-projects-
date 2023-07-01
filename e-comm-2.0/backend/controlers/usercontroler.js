import { User } from "../models/user.js"



async  function  createuser    (req, res) {

    try {
       const user = await User.create(req.body) 
   
       res.status(201).json({
         user
       })
    } catch (error) {
     res.status(500).json({
       error : error.message
     })
    }
   }



 async  function getAllUsers  (req, res ) {
   
try {
      const user = await User.find() 
  if(!user) {
     return  res.status(500).json({
        sucess : false , 
        error : " no users found"
    })
  }

      res.status(200).json({
        sucess : true ,
        user
      })


} catch (error) {
    res.status(500).json({
        sucess :  false  , 
        error   : error.message 
    })
}

 } 


async function getsingleuser (req, res) {
  const id = req.params.id    
  try {
    const user = await User.findById(id) 
    if(!user){
       return res.status(500).json({
            sucess : false , 
            error : "no users found"
        })}
     
        res.status(200).json({
            sucess : true ,
            user
    })

  } catch (error) {
    res.status(500).json({
        sucess :  false  , 
        error   : error.message 
    })
  }



}



export {
    createuser ,
     getAllUsers, 
     getsingleuser
   }