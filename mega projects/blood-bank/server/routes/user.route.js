import { Router } from 'express'
import { createUser,  deleteAll, deleteOne, getAllUsers, getOneUser, update } from '../controlers/user.controler.js'

const router = Router()

// GET localhost:3000/doner
router.post('/new', createUser)
router.get("/all" , getAllUsers)
router.get("/:id" , getOneUser)


router.delete("/delete/all"  , deleteAll)
router.delete("/delete/:id" , deleteOne)

router.put ("/update/:id" , update)





export { router }
