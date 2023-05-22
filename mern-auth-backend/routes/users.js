import { Router } from 'express'
import  * as userCTRL from '../controlers/userctrl.js'
import { isauthed } from '../middlewares/isauthed.js'

const router = Router()

// GET localhost:3000/users
// ----------------> public routes <------------------ 
router.post('/register' , userCTRL.register )
router.post('/login' ,   userCTRL.login )
router.post('/logout' , userCTRL.logout)
router.patch('/update' ,  userCTRL.update)

//----------------> privite routes <-------------------- 
router.get('/profile' , isauthed ,  userCTRL.profile ) 
router.post('/remove/:id' ,    userCTRL.deleteuser)



export { router }
