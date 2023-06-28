import { Product } from "../models/Productmodel.js"



async  function  createproduct (req, res) {
    try{
        const product = await Product.create(req.body) 
        res.status(201).json({
          sucess : true , 
          product 
        })
      }
     catch (error) {
        res.json( {
            error : error.message
        })
      }



    }

 async  function allproducts (req, res ) {
   
   try {
   const products  = await  Product.find() 
   res.status(200).json({
    sucess : true , 
    products
   })
  
 } catch (error) {
    res.status(400).json({
      sucess : false , 
      error  : error.message
    })

 }

}







async function updateproduct (req, res ) {

try {
  
 const   product = await Product.findByIdAndUpdate(req.params.id , req.body , {new : true})
 
 if(!product){
  return res.status(404).json({
     sucess : false , 
     error :"product not found "
   })   
  }
 
  res.status(200).json({
    updated: true , 
    product
  })


} catch (error) {
  res.json({
    updated : false , 
    error : error.message 
  })
}

}


async  function deleteproduct (req, res) {
  try {
      
   const  deleted  = await Product.findByIdAndDelete(req.params.id)

   res.status(200).json({
    sucess : true , 
    deletedproduct : deleted
   })
  

  } catch (error) {
     res.json({
      sucess : false , 
      error : error.message 
     })
  }
}



async function getsingleproduct (req, res) {
 
 try {
   
 const product = await Product.findById(req.params.id) 
 if(!product){
 return res.status(404).json({
    sucess : false , 
    error :"product not found "
  })   
 }
 res.status(200).json({
  sucess : true , 
  product
 })

 } catch (error) {
  res.status(404).json({
    sucess : false , 
    error : error.message
  })   
 }


}


export {
    createproduct,
    allproducts ,
    getsingleproduct, 
    updateproduct , 
    deleteproduct
}





