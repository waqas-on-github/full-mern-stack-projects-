import { Router } from 'express'
import { createuser , getAllUsers, getsingleuser } from '../controlers/usercontroler.js'

const router = Router()

// post localhost:3000/users/new
router.post('/new',  createuser )
//GET localhost:3000/users
router.get('/' ,getAllUsers)
//GET localhost:3000/users/:id
router.get("/:id"  , getsingleuser)

export { router }
