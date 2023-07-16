import { Router } from "express";
import { createcollection , deleteCollection, destroyall, getAllCollections } from "../controlers/collection.controler.js";


 const router = Router()

// Post  api/v1/collections/
router.get("/" , (req, res ) => {

    res.send("sanity check ")
})

router.post("/create" , createcollection) 
router.get("/all" , getAllCollections )
router.get("/deleteall" , destroyall)
router.delete("/:id" , deleteCollection)



export {
    router
}



