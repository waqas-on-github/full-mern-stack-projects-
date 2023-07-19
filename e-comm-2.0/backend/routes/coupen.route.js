 import { Router } from "express";
import { authorize, isLoggedIn } from "../middlewares/authhandler.js";
import {createCoupon ,getAllCoupons ,getOnecoupon ,updateCoupen ,deletecoupon , deleteAll}  from '../controlers/copon.controler.js'
 

const router = Router()

router.get("/" , (req, res ) => {res.send("snaity check")})
// ONLY ADMIN ROUTES 

router.post("/new" , isLoggedIn , authorize("ADMIN")  ,  createCoupon)
router.put('/update/:id' , isLoggedIn , authorize("ADMIN") , updateCoupen)
router.delete('/delete/:id' , isLoggedIn , authorize("ADMIN") , deletecoupon)
router.get("/all" , isLoggedIn, authorize("ADMIN") , getAllCoupons)
router.delete("/delete/all" , isLoggedIn , authorize("ADMIN") , deleteAll)

//ADMIN AND MODERATOR 
router.get("/one/:id" , isLoggedIn , authorize('ADMIN' , "MODERATOR")   , getOnecoupon)




export {
    router  
}