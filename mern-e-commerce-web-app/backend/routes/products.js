import { Router } from 'express'

import { products } from '../prd.js'


const router = Router()

// GET localhost:3000/products
router.get('/', function(req, res) {
  res.json(products)
})


router.get('/:id' , (req, res) => {
const product = products.find((item ) => item._id === req.params.id)
  res.json(product)
})


export { router }
