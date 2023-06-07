const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const user = await prisma.user.create({
        data: {
          email: req.body.email,
          name: req.body.nome,
        },
      })
    res.status(200).json("user add "+req.body.email)
} 

