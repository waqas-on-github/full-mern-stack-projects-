import { Router } from 'express'
import  * as userCTRL from '../controlers/userctrl.js'

const router = Router()

// GET localhost:3000/users

router.get('/allusers' , userCTRL.getAllUsers) 
router.post('/add' , userCTRL.createNewUser )
router.patch('/update' , userCTRL.updateUser )
router.delete('/delete' , userCTRL.deleteUser)



export { router }
