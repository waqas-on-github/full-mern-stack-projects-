import { Router } from 'express'
import { createUser } from '../controlers/doner.controler.js'

const router = Router()

// GET localhost:3000/doner
router.post('/new', createUser)




export { router }
