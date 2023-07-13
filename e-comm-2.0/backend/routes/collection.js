import { Router } from "express";
import { createcollection } from "../controlers/collection.controler.js";


 const router = Router()

// Post  api/v1/collections/
router.get("/" , (req, res ) => {

    res.send("sanity check ")
})

router.post("/create" , createcollection) 




export {
    router
}



