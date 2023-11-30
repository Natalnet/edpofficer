const send = require('../services/nodemailer')

const SendMail = async (req, res) => {
    const to = req.body.to
    
    console.log('Destinatário:', to);

    send(to)
    
    return res.json("Email enviado com sucesso") 
}

module.exports = {
    SendMail
}