const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const protexclusao = await prisma.user.create({
        protocolo: {
          email: req.body.email,
          name: req.body.nome,
          password: req.body.password,
        },
      })
    res.status(200).json("user add :"+req.body.email)
} 

