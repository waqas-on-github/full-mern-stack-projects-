import { Router } from "express";
import { addproduct, deleteall, productroute , deleteproduct, getAllProducts, getOneProduct } from "../controlers/productcontroler.js";
import { upload } from "../services/multerservice.js";
import { authorize, isLoggedIn } from "../middlewares/authhandler.js";
const router = Router()


// +++++++++++++++ ONLY ADMIN  ++++++++++++++++++++++

router.get('/products/delete' , isLoggedIn , authorize("ADMIN") ,  deleteall)

//     ADMIN &  MODERATOR    
router.post("/products/new"  ,   isLoggedIn , authorize("ADMIN") ,  upload.array("photos") , addproduct)
router.get("/products/upload" ,  productroute )
router.delete("/product/:id" , isLoggedIn  ,  authorize('MODERATOR' , "ADMIN") , deleteproduct)



// ADMIN USER MODERATOR ALL ACCESS
router.get("/product/get/:id"  ,  getOneProduct)
router.get("/products/all" , getAllProducts)

export {
    router
}