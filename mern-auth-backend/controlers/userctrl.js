import { User } from '../models/usermodel.js';
import { geteratetoken } from '../utils/generatetoken.js';

// Register user
async function register(req, res) {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
 const userExist = await User.findOne({ email });
   if (userExist) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const user = await   User.create({ name, email, password });
   
    
     
   if(user) {

  geteratetoken( res,  { id:  user._id})
  return res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });

}

  

}

// Login
async function login(req, res) {


   let  { email, password } = req.body;



   try {
     const user =  await User.findOne({email})   
     
     const matched = await user.comparepass(password)
     console.log(matched);
     
     if(user && matched) {
      geteratetoken( res,  { id:  user._id})
       res.json({
        id: user._id, 
        name : user.name , 
        email : user.email 
       })
    }
     
    } 
    
    catch (error) {
     res.json(error)
    }
   
  }


//logout 

function logout(req, res ) {
  res.cookie('token' , '' ,  { 
    httponly:true , 
    samesite : 'strict', 
    secure : process.env.NODE_ENV !=='dev'

   })

res.json({
  loggedout : true 
})

}


// Update user profile
function update(req, res) {
  res.send('Updating profile...');
}

// Get profiles
function profile(req, res) {
  User.find() 
  .then((profiles ) => {
    res.json({
      profiles
    })
  })
}


// delete user procted 
function deleteuser (req, res) {

  console.log(req.body);


  User.findByIdAndDelete(req.params.id)
  .then ((user) => {
    res.cookie('token' , '' ,  { 
      httponly:true , 
      samesite : 'strict', 
      secure : process.env.NODE_ENV !=='dev'
  
     })


    res.json({
      deleted : true 
    })
  }) .catch((err) => {
    res.json(err);
  })


}

export { register, login, logout, update, profile , deleteuser};
