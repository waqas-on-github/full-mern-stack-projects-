import { Router } from 'express'
import { createDoner,  deleteAll, getAllDoners, getOneDoner, update } from '../controlers/doner.controler.js'

const router = Router()

// GET localhost:3000/doner
router.post('/new', createDoner)


router.get("/all" , getAllDoners)
router.get("/:id" , getOneDoner)


router.delete("/delete/all"  , deleteAll)
router.delete("/delete/:id" , getOneDoner)

router.put ("/update/:id" , update)





export { router }
