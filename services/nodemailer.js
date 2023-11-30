const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"",
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, //true para 465, false para outras
  secureConnection: false,
  auth: {
    user: "37fc2a3cc27265",
    pass: "a3f6bc603e44a5",
  },
  tls: {
    rejectUnauthorized: true
  }
});

const send = (to) => {

  if (!to) {
    console.error('Error: No recipients defined');
    return;
  }

  // Configurações do email
  const mailOptions = {
    from: 'edpofficer23@gmail.com',
    to,
    subject: 'EdpOfficer',
    text: 'Protocolo enviado com sucesso',
    html: '<b>Hello world?</b>'
  };

  // Envie o email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Mensagem enviada: %s', info.messageId);
  });
};

module.exports = send