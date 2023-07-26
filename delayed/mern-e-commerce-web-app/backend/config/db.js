import mongoose, { mongo } from "mongoose";
mongoose.set('strictQuery' ,false)
const db = mongoose.connection
db.useDb('movies-db')
 mongoose.connect(process.env.DATABASE_URL)

 db.on('connected' ,() => {
    console.log(`connetct to ${db.name} with host name : ${db.host} and port number ${db.port}`);
})

