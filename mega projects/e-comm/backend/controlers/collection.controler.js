import {Collection} from '../models/collection.schema.js'
import asynchandler from '../services/asynchandler.js'
import CustomError from '../utils/customError.js'


const createcollection = asynchandler(async (req , res ) => {

const {name} = req.body   

if(!name) {
    throw new CustomError("collection name is required")
}

const collection = await Collection.create({name}) 

res.status(201).json ({
    sucess : true   , 
    message : "collection was created "
    , collection
})

})



const updatecollection  = asynchandler(async (req, res) => {
    const {name } = req.body ;
    const { id :  collectionid}= req.params 
   
    if(!name) {
        throw new CustomError (" name is required " , 400)
    }

    const upadatedcollecion  = await Collection.findByIdAndUpdate(collectionid ,  {name } , {new :true  , runvalidators : true })

    if(!upadatedcollecion) {
        throw new CustomError("Collection not found", 404);

    }
  
   res.status(200).json({ 
    sucess : true , 
    message : "collection updated " , 
    upadatedcollecion
   })


}) 


 const deleteCollection = asynchandler(async (req, res) => {
    const { id: collectionId } = req.params;
    const collectionToDelete = await Collection.findById(collectionId);
  
    if (!collectionToDelete) {
      throw new CustomError("Collection not found", 404);
    }
    
      const deleted  = await Collection.findByIdAndDelete(collectionId)
      if(!deleted) {
        throw new CustomError("coanot delete collection" , 401)
      }


    res.status(200).json({
      success: true,
      deleted , 
      message: "Collection has been deleted successfully",
    });
  });
  


  
   const getAllCollections = asynchandler(async (req, res) => {
    const collections = await Collection.find();
  
    if (!collections) {
      throw new CustomError("No collection found", 404);
    }
  
    res.status(200).json({
      success: true,
      collections,
    });
  });




  const destroyall  = asynchandler(async(req, res) => {
    const destroyed = await Collection.deleteMany() 
    if(!destroyed) { throw new CustomError("cant be  deleted " , 400)} 
    res.json({
      dleteted : true ,  
      destroyed
    })
  } )
















export {
    createcollection
    , updatecollection
    ,deleteCollection,
    getAllCollections , destroyall
}