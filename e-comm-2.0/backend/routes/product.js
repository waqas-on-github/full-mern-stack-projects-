import { Router } from "express";
import { createproduct  , allproducts, updateproduct, deleteproduct, getsingleproduct, tesimg } from "../controlers/productcontroler.js";
import { uploadImage } from "../services/uploadservice.js";

const router = Router()


// http:/localhost 3000/api/v1/products

router.get('/products' , allproducts)

router.get('/product/:id' , getsingleproduct )
router.post('/product/new' , createproduct)
router.put('/product/update/:id' , updateproduct )
router.delete('/product/delete/:id' , deleteproduct)


router.get('/product' , uploadImage )



export {
    router
}