-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Protocolos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nomeCompleto" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "nomeCompletoTitularLegal" TEXT,
    "emailTitularLegal" TEXT,
    "nomeSocialTitularLegal" TEXT,
    "cpfTiularLegal" TEXT,
    "dataNascimentoTitularLegal" TEXT,
    "telefoneTitularLegal" TEXT,
    "servico" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "documentos" TEXT,

    CONSTRAINT "Protocolos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Protocolos_email_key" ON "Protocolos"("email");
