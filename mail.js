const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth:{
        api_key: "2c9290b72ecabeb4f3c0e2b3cfb593f0-87c34c41-8ee5d842",
        domain: "sandboxb6d723704b2a4de59da5b82fb33e3112.mailgun.org"
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (name, email, message, cb) =>{
    const mailOptions = {
        from: `${name} ${email}`,
        to: "andrewapinon@gmail.com",
        subject: "61 Group",
        text: message
    }
    
    transporter.sendMail(mailOptions, (err, data)=>{
        if (err) {
            cb(err, null)
        }else {
            cb(null, data)
        }
    })
}

module.exports = sendMail;
