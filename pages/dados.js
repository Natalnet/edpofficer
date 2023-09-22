import React, { useEffect, useState } from "react";
import Base from "@layouts/Baseof";

function MyPage() {
  const [dadosDoBanco, setDadosDoBanco] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/api/formadd")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDadosDoBanco(data);
        setCarregando(false);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <Base>
      <div className="py-12">
        <div className="container rounded border border-border p-6 dark:border-darkmode-border">
          <h1>Dados do Banco de Dados</h1>
          {carregando ? (
            <p>Carregando dados...</p>
          ) : (
            <table>
              <thead className="bg-white  py-4">
                <tr>
                  <th>ID</th>
                  <th>Nome Completo</th>
                  <th>Email</th>
                  <th>Nome Social</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Nome Completo Titular Legal</th>
                  <th>Email Titular Legal</th>
                  <th>Nome Social Titular Legal</th>
                  <th>CPF Titular Legal</th>
                  <th>Data de Nascimento Titular Legal</th>
                  <th>Telefone Titular Legal</th>
                  <th>Serviço</th>
                  <th>Estado</th>
                  <th>Cidade</th>
                  <th>Documentos</th>{" "}
                </tr>
              </thead>
              <tbody>
                {dadosDoBanco.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.nomeCompleto}</td>
                    <td>{row.email}</td>
                    <td>{row.nomeSocial}</td>
                    <td>{row.cpf}</td>
                    <td>{row.telefone}</td>
                    <td>{row.nomeCompletoTitularLegal}</td>
                    <td>{row.emailTitularLegal}</td>
                    <td>{row.nomeSocialTitularLegal}</td>
                    <td>{row.cpfTiularLegal}</td>
                    <td>{row.dataNascimentoTitularLegal}</td>
                    <td>{row.telefoneTitularLegal}</td>
                    <td>{row.servico}</td>
                    <td>{row.estado}</td>
                    <td>{row.cidade}</td>
                    <td>{row.documentos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Base>
  );
}

export default MyPage;
