import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Modal } from "react-bootstrap";
import Head from "next/head";
import { Button, Grid } from "@mui/material";
import { Sidebar } from "@layouts/components/sidebar";

export default function Dash() {
  const [dadosDoBanco, setDadosDoBanco] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [erro, setErro] = useState("");
  const [protocolo, setProtocoloClicado] = useState([]);
  const [protocoloTemporario, setProtocoloTemporario] = useState();

  const alterarModalProtocolo = async (protocolo_id) => {
    // Encontra o protocolo correspondente no array dadosDoBanco
    const protocolo = dadosDoBanco.find((p) => p.id === protocolo_id);

    // Verifica se o protocolo foi encontrado antes de acessar suas propriedades
    if (protocolo) {
      // Atualiza o estado `protocolo` com os dados do protocolo
      setProtocoloClicado(protocolo);
    }
  };

  const abrirModal = (protocolo_id) => {
    alterarModalProtocolo(protocolo_id);

    // Armazena um valor temporário para o estado `protocolo`
    setProtocoloTemporario(protocolo);

    // Abre o modal
    setIsModalVisible(true);
  };

  const fecharModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetch("/api/formadd")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDadosDoBanco(data);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <>
      <Head>
        <title>Overview | edpOfficer</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4 py-12">
          <div className="container rounded border border-border p-6 dark:border-darkmode-border">
            <h1>Últimos Protocolos</h1>
            <DataTable
              id="tabela-protocolos"
              columns={[
                {
                  name: "ID",
                  selector: "id",
                  sortable: true,
                  cell: (dadosDoBanco) => (
                    <button
                      type="button"
                      className="btn btn-info btn-lg rounded p-1"
                      onClick={() => abrirModal(dadosDoBanco.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  ),
                },
                {
                  name: "Nome Completo",
                  selector: "nomeCompleto",
                  sortable: true,
                },
                { name: "Email", selector: "email", sortable: true },
                { name: "Nome Social", selector: "nomeSocial", sortable: true },
                { name: "CPF", selector: "cpf", sortable: true },
                { name: "Telefone", selector: "telefone", sortable: true },
                {
                  name: "Nome Completo Titular Legal",
                  selector: "nomeCompletoTitularLegal",
                  sortable: true,
                },
                {
                  name: "Email Titular Legal",
                  selector: "emailTitularLegal",
                  sortable: true,
                },
                {
                  name: "Nome Social Titular Legal",
                  selector: "nomeSocialTitularLegal",
                  sortable: true,
                },
                {
                  name: "CPF Titular Legal",
                  selector: "cpfTiularLegal",
                  sortable: true,
                },
                {
                  name: "Data de Nascimento Titular Legal",
                  selector: "dataNascimentoTitularLegal",
                  sortable: true,
                },
                {
                  name: "Telefone Titular Legal",
                  selector: "telefoneTitularLegal",
                  sortable: true,
                },
                { name: "Serviço", selector: "servico", sortable: true },
                { name: "Estado", selector: "estado", sortable: true },
                { name: "Cidade", selector: "cidade", sortable: true },
                { name: "Documentos", selector: "documentos", sortable: true },
              ]}
              data={dadosDoBanco}
              pagination
              fixedHeader
            />
          </div>
        </div>
      </div>
      <Modal
        show={isModalVisible}
        onHide={fecharModal}
        id="myModal"
        role="dialog"
      >
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative mx-auto my-6 w-2/3 max-w-6xl">
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              <Modal.Header className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                <Modal.Title className="text-3xl font-semibold">
                  Protocolo {protocolo && protocolo.id}
                </Modal.Title>
                <Button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => fecharModal()}
                >
                  &times;
                </Button>
              </Modal.Header>
              <Modal.Body className="relative flex-auto bg-white p-1 p-6 shadow dark:bg-gray-700">
                <div
                  className="container ml-3 px-6 py-6 lg:px-8"
                  id="informacoes-protocolo"
                >
                  <h6 className="pr-2 text-primary">
                    <strong>Nome:</strong>
                  </h6>
                  <h6 className="text-secondary" id="nome_modal">
                    {protocolo && protocolo.nomeCompleto}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>Email:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.email}
                  </h6>{" "}
                  <div className="flex">
                    <h6 className="pr-2 text-primary">
                      <strong>Nome Social:</strong>
                    </h6>
                  </div>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.nomeSocial}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>CPF:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.cpf}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>Telefone:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.telefone}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>Nome Completo Titular Legal:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.nomeCompletoTitularLegal}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>Email Titular Legal:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.emailTitularLegal}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>CPF Titular Legal:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.cpfTiularLegal}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>Data de Nascimento Titular Legal:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.dataNascimentoTitularLegal}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>Telefone Titular Legal:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.telefoneTitularLegal}
                  </h6>
                  <h6 className="pr-2 text-primary">
                    <strong>Serviço:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.servico}
                  </h6>
                  <h6 className="text-primary">
                    <strong>Estado:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.estado}
                  </h6>
                  <h6 className="text-primary">
                    <strong>Cidade:</strong>
                  </h6>
                  <h6 className="text-secondary">
                    {protocolo && protocolo.cidade}
                  </h6>
                  <div id="erro" className="mt-2">
                    {erro}
                  </div>
                </div>
                <Modal.Footer className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button className="btn btn-outline-primary col-6">
                    <i className="fa-solid fa-sliders mr-3"></i>
                    Alterar dados
                  </button>
                </Modal.Footer>
              </Modal.Body>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
