import { Router } from "express";
import { addproduct, deleteall, productroute , deleteproduct } from "../controlers/productcontroler.js";
import { upload } from "../services/multerservice.js";
const router = Router()


// http:/localhost 3000/api/v1/products

router.post("/products/new"  , upload.array("images") , addproduct)
router.get('/products/delete' , deleteall)
router.get("/products/upload" ,productroute )
router.delete("/product/:id" , deleteproduct)





export {
    router
}