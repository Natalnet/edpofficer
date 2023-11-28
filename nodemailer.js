const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello, nodemailerProject!');
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

const nodemailer = require("nodemailer");
const { resolve } = require('path');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    type: 'OAuth2',
    user: "edpofficer23@gmail.com",
    pass: "Edpofficer2023%",
    clientId: "948602744591-mifrqst2qomm6png55r2401fsd7eubn6.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken: "1//04YbOs5Y-XvT0CgYIARAAGAQSNwF-L9Irmmwa-10JjOD3kda15s8xyTZSdd5P2PWYmmHw2IKz3nhQJxQOfKw74HAU7H7SOsdH3gM",
  }
});

let mailOptions = {
  from: "edpofficer23@gmail.com",
  to: "lopeseugeniovitor@gmail.com",
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
    transporter.close();
    return resolve(data)
  }
});
