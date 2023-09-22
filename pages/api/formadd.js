import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const dadosDoBanco = await prisma.protocolo.findMany();

      return res.status(200).json(dadosDoBanco);
    } catch (error) {
      console.error('Erro ao buscar dados do banco de dados:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else if (req.method === 'POST') {
    try {
      const {
        nomeCompleto,
        email,
        nomeSocial,
        cpf,
        dataNascimento,
        telefone,
        nomeCompletoTitularLegal,
        emailTitularLegal,
        nomeSocialTitularLegal,
        cpfTiularLegal,
        dataNascimentoTitularLegal,
        telefoneTitularLegal,
        servico,
        estado,
        cidade,
        documentos,
      } = req.body;

      const newProtocolo = await prisma.protocolo.create({
        data: {
          nomeCompleto,
          email,
          nomeSocial,
          cpf,
          dataNascimento,
          telefone,
          nomeCompletoTitularLegal,
          emailTitularLegal,
          nomeSocialTitularLegal,
          cpfTiularLegal,
          dataNascimentoTitularLegal,
          telefoneTitularLegal,
          servico,
          estado,
          cidade,
          documentos,
        },
      });

      return res.status(201).json(newProtocolo);
    } catch (error) {
      console.error('Erro ao criar protocolo:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else if (req.method === 'PUT') {
    try {
      // Adicione o código para atualizar um registro existente aqui
      // Por exemplo:
      const { id, novoValor } = req.body;
      const protocoloAtualizado = await prisma.protocolo.update({
        where: { id: id },
        data: { colunaParaAtualizar: novoValor },
      });

      return res.status(200).json(protocoloAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar protocolo:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Adicione o código para excluir um registro existente aqui
      // Por exemplo:
      const { id } = req.body;
      await prisma.protocolo.delete({
        where: { id: id },
      });

      return res.status(204).end(); // Resposta de sucesso sem conteúdo
    } catch (error) {
      console.error('Erro ao excluir protocolo:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    return res.status(405).end(); // Método não permitido
  }
}
