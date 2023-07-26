import {transporter} from '../config/transporter.config.js'

const mailHelper = async (option ) =>  {

  const message =  {
    from : process.env.mail_Sender , 
    to : option.email , 
    subject :  option.subject , 
    text: option.text

   }

   await transporter.sendMail(message)

}


export  {
    mailHelper
}

