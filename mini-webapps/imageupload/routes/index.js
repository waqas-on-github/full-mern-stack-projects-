import { Router } from 'express';
import multer from 'multer';
import cloudnarconfig from '../config/cloudnarconfig.js';
import { log } from 'node:console';
import fs from "node:fs/promises"
import { uploadimages } from '../controlers/multiplefiles.js';
// const data = await fs.readdir("uploads/")


// data.forEach( async (element ) => {
//    await fs.unlink(element)
  
// })

const cloudinary = cloudnarconfig()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname  + '-' + uniqueSuffix + "."  + file.mimetype.split('/')[1])
  }
})

const upload = multer({ storage: storage })


const router = Router();

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post("/uploadimages" , upload.array('fileimages') , uploadimages )

// POST /uploads
router.post('/upload', upload.single('fileimage' ), ( req, res) => {

  if (!req.file) {
    return  res.status(400).send('No file selected');
   
 }

 log(req.file.path)

try {
   cloudinary.uploader.upload(req.file.path , (err , result ) => {
    if(err) {
      console.log(err);
      return res.status(500).json({
        err : err
      })
    }
     res.json({
      url: result.secure_url
     })
   } )

} catch (error) {
  return res.status(500).json({
    err : err.message
  })
 
}

});

export { router  , storage};
