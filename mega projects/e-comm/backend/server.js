// import npm packages
import 'dotenv/config.js'
import   './config/db.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'

//03


// import routers
import { router as indexRouter } from './routes/index.js'
import { router as usersRouter } from './routes/users.js'
import { router as productrouter } from './routes/product.js'
import { router as collectionrouter} from './routes/collection.js'
import {router as couponrouter } from './routes/coupen.route.js' 
import {router as  orderrouter  } from './routes/order.route.js'
import {router as cartRouter} from  './routes/cart.route.js'
import {router as addressRouter} from './routes/address.route.js'
 



// create the express app
const app = express()

// view engine setup
app.set('view engine', 'ejs')

// basic middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.use(cookieParser())

// mount imported routes
app.use('/', indexRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1' , productrouter)
app.use('/api/v1/collections' , collectionrouter)
app.use('/api/v1/coupon' , couponrouter) 
app.use('/api/v1/orders' , orderrouter)
app.use('/api/v1/cart' , cartRouter )
app.use('/api/v1/address' , addressRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler middleware rs
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)

  res.json({
    error : err
  })



  process.on("databaseError", (err) => {
    // Pass the custom error to the error handling middleware
    app.emit("error", err);
    console.log( " error fro emmiter  " + err);
    
  });
})

export { app }
