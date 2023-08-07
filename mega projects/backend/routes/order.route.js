import { Router } from "express";
import {  generateStripeOrderId} from "../controlers/order.controler.js";
import { authorize, isLoggedIn } from "../middlewares/authhandler.js";

const router = Router() 


router.post('/pay' , isLoggedIn , generateStripeOrderId )


export {
    router
}