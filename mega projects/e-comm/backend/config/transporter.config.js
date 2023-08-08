// import nodemailer from "nodemailer";


// // transporter.config.js

// const transporter = nodemailer.createTransport({
//   host: process.env.mail_Host,
//   port: parseInt(process.env.mail_Port),
//   secure: false, // Set to false when using STARTTLS
//   auth: {
//     user: process.env.mail_Username,
//     pass: process.env.mail_Password,
//   },
// });

import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 587, // Use port 587 for STARTTLS
//   secure: false, // Set to false when using STARTTLS
//   auth: {
//     user: "4e959f6abc4066",
//     pass: "51b1ea7456093d",
//   },
// });


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'tomasa5@ethereal.email',
      pass: 'xmn2KWhsr524ekxwfX'
  }
});




export { transporter };