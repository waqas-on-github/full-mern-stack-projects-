import { Router } from 'express'
import { deleteallusers, forgotPasswoed,resetpassword, getAllusers, getprofile, login, logout, signup  } from '../controlers/usercontroler.js'
const router = Router()
import { authorize, isLoggedIn  ,  } from '../middlewares/authhandler.js'

// post localhost:3000/users/new
router.post('/new',  signup )
router.post('/login' , login)
router.post('/forgot' ,   forgotPasswoed) 
router.post("/password/reset/:id" , resetpassword)



router.get('/logout' ,  isLoggedIn , logout) 
router.get("/profile"  , isLoggedIn ,    getprofile)



// ONLY ADMIN ROUTES 
router.get("/all",isLoggedIn ,  authorize( "ADMIN")  ,  getAllusers)
router.delete('/delete', isLoggedIn , authorize("ADMIN") ,    deleteallusers)




export { router }



