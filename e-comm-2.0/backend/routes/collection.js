import { Router } from "express";
import { createcollection , deleteCollection, destroyall, getAllCollections } from "../controlers/collection.controler.js";
import { authorize, isLoggedIn } from "../middlewares/authhandler.js";


 const router = Router()

// Post  api/v1/collections/
router.get("/" , (req, res ) => {

    res.send("sanity check ")
})

router.post("/create"  , isLoggedIn , authorize("ADMIN" , "MODERATOR")   , createcollection) 
router.get("/all" ,  isLoggedIn , authorize("ADMIN" , "MODERATOR") ,  getAllCollections )
router.delete("/deleteall" ,authorize("ADMIN" )  ,   destroyall)
router.delete("/:id" , deleteCollection)



export {
    router
}



