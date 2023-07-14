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
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};

const uploadmultiple = async (req, res) => {
 
  const urls = []
  const files  = req.files ; 
  
   const uploadpromsis =   files.map((file ) => {

   return  new Promise(async ( resolve  , reject ) => {
    try {
        const result = await  cloudinary.uploader.upload(file.path)
        urls.push(result.secure_url)
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



const deleteimage  = async (id) => {
     const options =  {
      overwrite : true 
     }

   try { 
       const result =  await cloudinary.uploader.destroy(id)
        return result 
   } catch (error) {
    return error  
   }




}
  
export {uploadImage , deleteimage , uploadmultiple}




