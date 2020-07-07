const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();

const auth = {
    auth:{
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (name, email, message, cb) =>{
    const mailOptions = {
        from: email,
        to: process.env.MAILGUN_EMAIL,
        subject: `61 Group from ${name}`,
        text: message
    }
    
    transporter.sendMail(mailOptions, (err, data)=>{
        if (err) {
            cb(err, null)
        }else {
            cb(null, data)
        }
    })
    //to add function
}

module.exports = sendMail;
