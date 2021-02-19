const express = require('express');
const app = express();

require('dotenv').config();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');
})

app.post('/', (req, res)=>{
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: `${process.env.EMAIL_CLI}`,
    auth: {
      user: `${process.env.EMAIL_ADDR}`,
      pass: `${process.env.EMAIL_PSWD}`
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'stephen.dennis139@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.service}`,
    text: `${req.body.message} 
  ${req.body.name}'s contact number is ${req.body.phone_number}`
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
      res.send('error');
    }else{
      console.log('Email sent: ' + info.response);
      res.send('success')
    }
  })
}) 

app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})