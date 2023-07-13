import { Router } from "express";
import { addproduct, deleteall } from "../controlers/productcontroler.js";

const router = Router()


// http:/localhost 3000/api/v1/products

router.post("/product/new"  , addproduct)
router.get('/products/delete' , deleteall)


export {
    router
}