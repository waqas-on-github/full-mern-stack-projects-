import cloudnaryconfig from "../config/cloudnaryconfig.js";
import fs from 'node:fs'
import CustomError from "../utils/customError.js";

const cloudinary = cloudnaryconfig()

// Uploads an image file

const uploadImage = async (imagepath) => {

    const options = {
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagepath ,  options);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};

const uploadmultiple = async (req, res) => {
 
  const urls = []
  const files  = req.files ; 
  
   const uploadpromsis =  files.map((file ) => {

   return  new Promise(async ( resolve  , reject ) => {
    try {
        const result = await  cloudinary.uploader.upload(file.path)
        urls.push({  secure_url :   result.secure_url , public_id : result.public_id})
        resolve()
      } catch (error) {

        reject(error)

    } finally {
      // Code that will always run
        fs.unlinkSync(file.path , (err) => {
          if(err) {
            throw new CustomError("error while deleting files" , 401)
          }
        })
}})

  })

  await  Promise.all(uploadpromsis)
  return urls

}



const deleteimage  = async (ids) => {
     const options =  {
      overwrite : true 
     }

   try { 
       const result =  await cloudinary.uploader.destroy( ids )
        return result 
   } catch (error) {
    return error  
   }

}




  
export {uploadImage , deleteimage , uploadmultiple}




