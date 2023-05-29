import { Router } from 'express'
import  * as userCTRL from '../controlers/userctrl.js'
import { isauthed } from '../middlewares/isauthed.js'

const router = Router()

// GET localhost:3000/api
// ----------------> public routes <------------------ 


router.get('/' , (req, res) => {
    res.send("api is running ...")
})


router.post('/users/register' , userCTRL.register )
router.post('/users/login' ,   userCTRL.login )
router.post('/users/logout' , userCTRL.logout)
router.patch('/users/update' ,  userCTRL.update)

//----------------> privite routes <-------------------- 
router.get('/users/profile' ,   userCTRL.profile ) 
router.post('/users/remove/:id' , isauthed , userCTRL.deleteuser)



export { router }
