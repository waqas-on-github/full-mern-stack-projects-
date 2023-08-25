import { Router } from "express";
import { addToCart, getCart , deleteCart, deleteItem  } from "../controlers/cart.controler.js";
import { isLoggedIn } from "../middlewares/authhandler.js";

const router = Router()

router.get('/' , (req, res) => {res.send("sanity check")})

router.post('/add' , isLoggedIn ,  addToCart )

router.get("/items" , isLoggedIn , getCart)


router.delete('/delete' , isLoggedIn ,   deleteCart)

router.post("/delete/:id" , isLoggedIn , deleteItem)





export {router }