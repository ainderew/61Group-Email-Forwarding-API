const express = require("express");
const cors = require("cors")
const app = express();
const sendMail = require("./mail");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("connected"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())


app.get("/", (req,res) =>{
    res.json("CONNECTED");
})

//EMAIL ROUTE TO PASS TO EMAILER
app.post("/email", (req,res) =>{
    
    const {name, email, message} = req.body
    sendMail(name, email, message, (err, data) =>{
        if (err){
            res.status(500).json({message: "Error"})
        }else {
            res.json({message: "Email Sent"})
        }
    } )
})