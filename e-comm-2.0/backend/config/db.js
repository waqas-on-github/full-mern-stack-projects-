import mongoose from "mongoose";
mongoose.set('strictQuery' ,false)
const db = mongoose.connection

 mongoose.connect(process.env.DATABASE_URL)

 db.on('connected' ,() => {
    console.log(`connetct to ${db.name} with host name : ${db.host} and port number ${db.port}`);
})


db.on("error", (err) => {
    console.error("Database connection error:", err);
    // Perform appropriate error handling (e.g., retry logic, exit the application)
  });

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
