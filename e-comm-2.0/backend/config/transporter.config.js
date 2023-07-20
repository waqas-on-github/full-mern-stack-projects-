
import nodemailer from "nodemailer";


const  transporter = nodemailer.createTransport({
    host:process.env.mail_Host , 
    port: process.env.mail_Port , 
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.mail_Username , 
      pass:process.env.mail_Sender
    }
  });



  export {
    transporter
  }
