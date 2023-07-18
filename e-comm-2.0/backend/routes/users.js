import { Router } from 'express'
import { deleteallusers, getAllusers, getprofile, login, logout, signup  } from '../controlers/usercontroler.js'
const router = Router()
import { isLoggedIn } from '../middlewares/authhandler.js'
// post localhost:3000/users/new
router.post('/new',  signup )
router.post('/login' , login) 
router.get('/logout' , logout) 
router.get("/profile" , isLoggedIn, getprofile)
router.get("/all" , isLoggedIn , getAllusers)



router.delete('/delete' ,isLoggedIn,  deleteallusers)

export { router }

