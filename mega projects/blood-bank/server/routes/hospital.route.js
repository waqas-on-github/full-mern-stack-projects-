import { Router } from "express";
import { createAccount, deleteAllHospitals } from "../controlers/Hospital.controler.js";

const router = Router() 

router.get("/" , (req, res ) => {
    res.send("sanity check ")
})


router.post("/create" , createAccount)
router.get("/delete/all" , deleteAllHospitals)

export {
    router
}