import { PrismaClient } from '@prisma/client';

// Cria uma única instância do Prisma Client
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Trata requisições GET
  if (req.method === 'GET') {
    try {
      // Busca todos os protocolos no banco de dados
      const dadosDoBanco = await prisma.protocolo.findMany();

      // Retorna os protocolos encontrados com status 200
      return res.status(200).json(dadosDoBanco);
    } catch (error) {
      console.error('Erro ao buscar dados do banco de dados:', error);
      // Retorna um erro 500 se algo der errado
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } 
  // Trata requisições POST
  else if (req.method === 'POST') {
    try {
      // Desestrutura os dados do protocolo do corpo da requisição
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

      // Cria um novo protocolo no banco de dados
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

      // Retorna o novo protocolo com status 201
      return res.status(201).json(newProtocolo);
    } catch (error) {
      console.error('Erro ao criar protocolo:', error);
      // Retorna um erro 500 se algo der errado
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } 
  // Trata requisições DELETE
  else if (req.method === 'DELETE') {
    try {
      // Pega o ID do protocolo do corpo da requisição
      const { id } = req.body;

      // Exclui o protocolo do banco de dados
      await prisma.protocolo.delete({
        where: { id: id },
      });

      // Retorna uma resposta de sucesso sem conteúdo
      return res.status(204).end();
    } catch (error) {
      console.error('Erro ao excluir protocolo:', error);
      // Retorna um erro 500 se algo der errado
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } 
  // Trata qualquer outro método HTTP
  else {
    // Retorna um erro 405 (Método não permitido)
    return res.status(405).end();
  }
}