import cloudnaryconfig from "../config/cloudnaryconfig.js";

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
  
export {uploadImage , deleteimage}