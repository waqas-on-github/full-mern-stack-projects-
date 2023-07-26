import { Router } from 'express'
import { Product } from '../models/productModel.js'
import expressAsyncHandler from 'express-async-handler'


const router = Router()

// GET localhost:3000/products
router.get('/', expressAsyncHandler(  async function   (req, res) {
  const product = await  Product.find()
  res.json(product)
}))


router.get('/:id', expressAsyncHandler(async (req, res) => {
  
  const singleproduct = await Product.findById(req.params.id); // Remove the conversion to String
  console.log(singleproduct);
  if (singleproduct) {
    res.json(singleproduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}));



export { router }
