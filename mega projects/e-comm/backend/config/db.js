import mongoose from "mongoose";
import CustomError from "../utils/customError.js";
import asynchandler from "../services/asynchandler.js";
mongoose.set('strictQuery' ,false)
const db = mongoose.connection

 mongoose.connect(process.env.DATABASE_URL)

 db.on('connected' ,() => {
    console.log(`connetct to ${db.name} with host name : ${db.host} and port number ${db.port}`);
})


  db.on("error",   (err , req, res, next) => {
      console.error("Database connection error:", err);
    // Emit a custom event "databaseError" with the error object
  process.emit("databaseError", new CustomError(err.message, 500));
    
  })

  // Handle graceful shutdown
process.on("SIGINT", async () => {
    try {
      await mongoose.disconnect();
      console.log("Database connection closed gracefully.");
      process.exit(0);
    } catch (err) {
      console.error("Error while closing database connection:", err);
      process.exit(1);
    }
  });
