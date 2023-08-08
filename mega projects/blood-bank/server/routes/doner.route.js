import { Router } from "express";
import { createDoner } from "../controlers/doner.controler.js";

const router = Router() 
router.get("/" ,( req, res) => {
    res.send("sanity check")
})


router.post("/new" , createDoner)

export {
    router
}