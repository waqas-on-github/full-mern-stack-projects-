import { Router } from "express";
import { addproduct, deleteall, productroute , deleteproduct, getAllProducts, getOneProduct } from "../controlers/productcontroler.js";
import { upload } from "../services/multerservice.js";
const router = Router()


// http:/localhost 3000/api/v1/products

router.post("/products/new"  , upload.array("images") , addproduct)
router.get("/products/upload" ,productroute )

// get products 
router.get("/product/get/:id" , getOneProduct)
router.get("/products/all" , getAllProducts)

 
// delete products 
router.get('/products/delete' , deleteall)
router.delete("/product/:id" , deleteproduct)






export {
    router
}