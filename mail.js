const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth:{
        api_key: process.env.MAILGUN_API,
        domain: process.env.MAILGUN_DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (name, email, message, cb) =>{
    const mailOptions = {
        from: email,
        to: "oleg.liyasov@61-group.ru",
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
}

module.exports = sendMail;
