import cloudnarconfig from "../config/cloudnarconfig.js";
import fs from 'node:fs'

const cloudinary = cloudnarconfig();

function uploadimages(req, res) {
    const urls = [];
    const files = req.files;
        const uploadPromises = files.map((file) => {
        return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(file.path, (err, result) => {
        if (err) {
          reject(err);
        } else {
          urls.push(result.secure_url);
          resolve();
        }
    });
}).finally(() => {
    fs.unlinkSync(file.path , (err) => {
        if(err) {
            console.log(err);
        }
    })
})
})

Promise.all(uploadPromises)
    .then(() => {

      res.json({
        urls: urls
      }); 
    })
    .catch((err) => {
      res.json({
        uploaded: false,
        err: err.message
      });
    });
}



   

export {
  uploadimages
};
