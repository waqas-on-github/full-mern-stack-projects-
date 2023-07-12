import { Router } from 'express';
import multer from 'multer';



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

// POST /uploads
router.post('/', upload.single('fileimage'), ( req, res) => {

  console.log(req.file);
  if (!req.file) {
    res.status(400).send('No file selected');
    return;
  }

  res.send('File uploaded');
});

export { router };
