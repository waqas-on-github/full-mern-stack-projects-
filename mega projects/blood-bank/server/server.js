// import npm packages
import 'dotenv/config.js'
import './config/db.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as donerRouter } from './routes/doner.route.js'
import { CustomError } from './services/customerror.js'
// create the express app
const app = express()


// basic middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// mount imported routes
app.use('/', indexRouter)
app.use('/doner', donerRouter)


// error handler middleware 
// error handler middleware 

// error handler middleware 
app.use(function (err, req, res, next) {
  if (err instanceof CustomError) {
    console.log("Custom error occurred");
    res.status(err.code || 500).json({
      success: false,
      error: {
        message: err.message,
        code: err.code,
        cause: err.cause
      }
    });
  } else {
    console.error('Error occurred');
    console.log("From middleware");
  
    res.status(err.code || 500).json({
      success: false,
      error: {
        message: err.message
      }
    });
  }
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
res.json({
  message :  "404 route not found "
})
})

export { app }
