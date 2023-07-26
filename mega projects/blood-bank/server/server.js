// import npm packages
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as usersRouter } from './routes/users.js'
import { CustomError } from './serves/customerror.js'

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
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler middleware 
app.use(function (err, req, res, next) {
  if(err instanceof CustomError) {
    res.status(err.code || 500).json({
      sucess : false , 
      err : err
    })

    console.error(`custom error occered due to ${err.cause}` ,  err)
  } 

console.error('error occered ');
res.status(err.code || 500).json({
  sucess : false , 
  err : err
})
  // render the error page
 
})

export { app }
