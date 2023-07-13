import { Router } from "express";
import { addproduct } from "../controlers/productcontroler.js";

const router = Router()


// http:/localhost 3000/api/v1/products

router.post("/product/new"  , addproduct)


export {
    router
}