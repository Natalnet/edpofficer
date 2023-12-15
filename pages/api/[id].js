import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    // Obtém o ID do protocolo
    const { id } = req.query;

    // Obtém os dados do protocolo do corpo da requisição
    const data = req.body;

    // Atualiza o protocolo no banco de dados
    const protocoloAtualizado = await prisma.protocolo.update({
      where: { id: Number(id) },
      data,
    });

    res.status(200).json(protocoloAtualizado);
  } else {
    // Se o método não for PUT, retorna um erro 405 (Método não permitido)
    res.status(405).json({ message: 'Método não permitido' });
  }
}