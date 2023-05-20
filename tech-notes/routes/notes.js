import { Router } from "express";
import  * as notesctrl from "../controlers/notesctrl.js";


const router = Router()

 

router.get('/allnotes ' , notesctrl.getAllNotes ) 
router.post('/add' , notesctrl.createNewNote )
router.patch('/update' , notesctrl.updateNote )
router.delete('/delete' , notesctrl.deleteNote)



export {
    router as notesRouter
}


