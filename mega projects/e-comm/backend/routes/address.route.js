import { Router } from "express";
import { isLoggedIn } from "../middlewares/authhandler.js";
import { createAddress , getUserAddress } from "../controlers/address.controler.js";

const router = Router() 

 router.get ("/" , (req, res) => {res.send("sanity check")})

 router.post("/create" , isLoggedIn ,createAddress )

 router.get('/get' , isLoggedIn,  getUserAddress)


export {
    router
}