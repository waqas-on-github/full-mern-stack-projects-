import { Router } from "express";
import {  generateStripeOrderId} from "../controlers/order.controler.js";
import { authorize, isLoggedIn } from "../middlewares/authhandler.js";

const router = Router() 


router.post('/payment_intent' , isLoggedIn , generateStripeOrderId )

export {
    router
}