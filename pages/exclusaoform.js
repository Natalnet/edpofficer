import Base from "@layouts/Baseof";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Services = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeCompletoTitularLegal, setNomeCompletoTitularLegal] = useState("");
  const [emailTitularLegal, setEmailTitularLegal] = useState("");
  const [nomeSocialTitularLegal, setNomeSocialTitularLegal] = useState("");
  const [cpfTiularLegal, setCpfTiularLegal] = useState("");
  const [dataNascimentoTitularLegal, setDataNascimentoTitularLegal] =
    useState("");
  const [telefoneTitularLegal, setTelefoneTitularLegal] = useState("");
  const [servico, setServico] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [documentos, setDocumentos] = useState("");
  const [error, setError] = useState("");
  const [estaEnviando, setEstaEnviando] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEstaEnviando(true);

    handleForm();
  };
  
  const handleForm = async () => {
    try {
      const protocolo = {
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
      };

      const response = await fetch("/api/formadd", {
        method: "POST",
        body: JSON.stringify(protocolo),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (response.ok) {
        router.push("/consultarprotocolo");
        setEstaEnviando(false);
        console.log("Enviado");
        alert("Formulário Enviado com sucesso!")
        setEnviando(true);
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (err) {
      setError(err.message);
    }

    // Limpar os campos após o envio
    setNomeCompleto("");
    setEmail("");
    setNomeSocial("");
    setCpf("");
    setDataNascimento("");
    setTelefone("");
    setNomeCompletoTitularLegal("");
    setEmailTitularLegal("");
    setNomeSocialTitularLegal("");
    setCpfTiularLegal("");
    setDataNascimentoTitularLegal("");
    setTelefoneTitularLegal("");
    setServico("");
    setEstado("");
    setCidade("");
    setDocumentos("");
  };

  return (
    <Base>
      <form onSubmit={handleSubmit}>
        <div className="py-12">
          <div className="container rounded border border-border p-6 dark:border-darkmode-border">
            <div className="grid grid-cols-1 gap-6">
              <h2>
                FORMULÁRIO PARA EXERCÍCIO DOS DIREITOS DO TITULAR DOS DADOS
                PESSOAIS
              </h2>
            </div>
            <div>
              <h4 className="mt-3 text-lg text-gray-600">
                Conforme os Artigos 17 a 22 da Lei 13.709/2018 (Lei Geral de
                Proteção de Dados Pessoais)
              </h4>
            </div>
            <div className="mt-3">
              <h3>1. Campos obrigatórios para o Titular dos Dados:</h3>
              <div className="mt-3 flex">
                <div className="flex-1">
                  <label htmlFor="nomeCompleto">Nome completo *:</label>
                  <input
                    type="text"
                    id="nomeCompleto"
                    name="nomeCompleto"
                    required
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    placeholder="Digite o nome completo"
                    className="
                      mt-1
                      block
                      w-11/12
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Digite seu email"
                    className="
                      mt-1
                      block
                      w-11/12
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                  />
                </div>
              </div>
              <div className="mt-3 flex">
                <div className="flex-1">
                  <label htmlFor="nomeSocial">Nome Social </label>
                  <input
                    type="text"
                    id="nomeSocial"
                    name="nomeSocial"
                    required
                    value={nomeSocial}
                    onChange={({ target }) => setNomeSocial(target.value)}
                    placeholder="Digite o nome social"
                    className="mt-1
                        block
                        w-11/12
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="cpf">CPF*</label>
                  <input
                    type="number"
                    id="cpf"
                    name="cpf"
                    required
                    value={cpf}
                    onChange={({ target }) => setCpf(target.value)}
                    placeholder="Digite seu CPF"
                    className="mt-1
                          block
                          w-11/12
                          rounded-md
                          border-gray-300
                          shadow-sm
                          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-3 flex">
                <div className="flex-1">
                  <label htmlFor="dataNascimento">Data de Nascimento*</label>
                  <input
                    type="date"
                    id="dataNascimento"
                    name="dataNascimento"
                    placeholder="dd / mm / aa"
                    required
                    value={dataNascimento}
                    onChange={({ target }) => setDataNascimento(target.value)}
                    className="mt-1
                        block
                        w-11/12
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="telefone">Telefone </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={telefone}
                    onChange={({ target }) => setTelefone(target.value)}
                    placeholder="Digite seu Telefone"
                    className="mt-1
                        block
                        w-11/12
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>
            <h3 className="mt-3">
              2. Campos obrigatórios para o responsável legal de Titular dos
              Dados criança e/ou adolescente e curatelados:
            </h3>
            <div className="mt-3 flex">
              <div className="flex-1">
                <label htmlFor="nomeCompletoTitularLegal">
                  Nome completo *:
                </label>
                <input
                  type="text"
                  id="nomeCompletoTitularLegal"
                  name="nomeCompletoTitularLegal"
                  onChange={({ target }) =>
                    setNomeCompletoTitularLegal(target.value)
                  }
                  placeholder="Digite o nome completo"
                  className="mt-1
                      block
                      w-11/12
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="emailTitularLegal">Email:</label>
                <input
                  type="text"
                  id="emailTitularLegal"
                  name="emailTitularLegal"
                  onChange={({ target }) => setEmailTitularLegal(target.value)}
                  placeholder="Digite seu email"
                  className="mt-1
                      block
                      w-11/12
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-3 flex">
              <div className="flex-1">
                <label htmlFor="nomeSocialTitularLegal">Nome Social </label>
                <input
                  type="text"
                  id="nomeSocialTitularLegal"
                  name="nomeSocialTitularLegal"
                  onChange={({ target }) =>
                    setNomeSocialTitularLegal(target.value)
                  }
                  placeholder="Digite o nome social"
                  className="mt-1
                      block
                      w-11/12
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cpfTiularLegal">CPF:</label>
                <input
                  type="text"
                  id="cpfTiularLegal"
                  name="cpfTiularLegal"
                  onChange={({ target }) => setCpfTiularLegal(target.value)}
                  placeholder="Digite seu CPF"
                  className="mt-1
                      block
                      w-11/12
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-3 flex">
              <div className="flex-1">
                <label htmlFor="dataNascimentoTitularLegal">
                  Data de Nascimento*
                </label>
                <input
                  type="date"
                  id="dataNascimentoTitularLegal"
                  name="dataNascimentoTitularLegal"
                  placeholder="dd / mm / aa"
                  onChange={({ target }) =>
                    setDataNascimentoTitularLegal(target.value)
                  }
                  className="mt-1
                      block
                      w-11/12
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="telefoneTitularLegal">Telefone </label>
                <input
                  type="tel"
                  id="telefoneTitularLegal"
                  name="telefoneTitularLegal"
                  onChange={({ target }) =>
                    setTelefoneTitularLegal(target.value)
                  }
                  placeholder="Digite seu Telefone"
                  className="mt-1
                        block
                        w-11/12
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <h3 className="mt-3">
              3. Selecione o direito que pretende exercer:
            </h3>
            <div className="mt-3">
              <select
                id="servico"
                name="servico"
                onChange={({ target }) => setServico(target.value)}
                className="mt-1
                block
                w-11/12
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Selecione um serviço</option>
                <option
                  value="Eliminação dos dados pessoais tratados com o consentimento, exceto
              nas hipóteses previstas no art. 16 da Lei."
                >
                  Eliminação dos dados pessoais tratados com o consentimento,
                  exceto nas hipóteses previstas no art. 16 da Lei.
                </option>
              </select>
            </div>
            <h3 className="mt-3">4. Local:</h3>
            <div className="mt-3 flex">
              <div className="flex-1">
                <label htmlFor="estado">Estado:</label>
                <select
                  id="estado"
                  name="estado"
                  onChange={({ target }) => setEstado(target.value)}
                  className="mt-1
                        block
                        w-11/12
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value=""></option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AM">AM</option>
                  <option value="AP">AP</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MG">MG</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="PR">PR</option>
                  <option value="RJ">RJ</option>
                  <option value="RN" defaultValue>
                    RN
                  </option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="RS">RS</option>
                  <option value="SC">SC</option>
                  <option value="SE">SE</option>
                  <option value="SP">SP</option>
                  <option value="TO">TO</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="cidade">Cidade:</label>
                <select
                  id="cidade"
                  name="cidade"
                  onChange={({ target }) => setCidade(target.value)}
                  className="mt-1
                        block
                        w-11/12
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value=""></option>
                  <option value="Acari">Acari</option>
                  <option value="Açu">Açu</option>
                  <option value="Afonso Bezerra">Afonso Bezerra</option>
                  <option value="Água Nova">Água Nova</option>
                  <option value="Alexandria">Alexandria</option>
                  <option value="Almino Afonso">Almino Afonso</option>
                  <option value="Alto do Rodrigues">Alto do Rodrigues</option>
                  <option value="Angicos">Angicos</option>
                  <option value="Antônio Martins">Antônio Martins</option>
                  <option value="Apodi">Apodi</option>
                  <option value="Areia Branca">Areia Branca</option>
                  <option value="Arês">Arês</option>
                  <option value="Augusto Severo">Augusto Severo</option>
                  <option value="Baía Formosa">Baía Formosa</option>
                  <option value="Baraúna">Baraúna</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Bento Fernandes">Bento Fernandes</option>
                  <option value="Bodó">Bodó</option>
                  <option value="Bom Jesus">Bom Jesus</option>
                  <option value="Brejinho">Brejinho</option>
                  <option value="Caiçara do Norte">Caiçara do Norte</option>
                  <option value="Caiçara do Rio do Vento">
                    Caiçara do Rio do Vento
                  </option>
                  <option value="Caicó">Caicó</option>
                  <option value="Campo Redondo">Campo Redondo</option>
                  <option value="Canguaretama">Canguaretama</option>
                  <option value="Caraúbas">Caraúbas</option>
                  <option value="Carnaúba dos Dantas">
                    Carnaúba dos Dantas
                  </option>
                  <option value="Carnaubais">Carnaubais</option>
                  <option value="Ceará-Mirim">Ceará-Mirim</option>
                  <option value="Cerro Corá">Cerro Corá</option>
                  <option value="Coronel Ezequiel">Coronel Ezequiel</option>
                  <option value="Coronel João Pessoa">
                    Coronel João Pessoa
                  </option>
                  <option value="Cruzeta">Cruzeta</option>
                  <option value="Currais Novos">Currais Novos</option>
                  <option value="Doutor Severiano">Doutor Severiano</option>
                  <option value="Encanto">Encanto</option>
                  <option value="Equador">Equador</option>
                  <option value="Espírito Santo">Espírito Santo</option>
                  <option value="Extremoz">Extremoz</option>
                  <option value="Felipe Guerra">Felipe Guerra</option>
                  <option value="Fernando Pedroza">Fernando Pedroza</option>
                  <option value="Florânia">Florânia</option>
                  <option value="Francisco Dantas">Francisco Dantas</option>
                  <option value="Frutuoso Gomes">Frutuoso Gomes</option>
                  <option value="Galinhos">Galinhos</option>
                  <option value="Goianinha">Goianinha</option>
                  <option value="Governador Dix-Sept Rosado">
                    Governador Dix-Sept Rosado
                  </option>
                  <option value="Grossos">Grossos</option>
                  <option value="Guamaré">Guamaré</option>
                  <option value="Ielmo Marinho">Ielmo Marinho</option>
                  <option value="Ipanguaçu">Ipanguaçu</option>
                  <option value="Ipueira">Ipueira</option>
                  <option value="Itajá">Itajá</option>
                  <option value="Itaú">Itaú</option>
                  <option value="Jaçanã">Jaçanã</option>
                  <option value="Jandaíra">Jandaíra</option>
                  <option value="Janduís">Janduís</option>
                  <option value="Januário Cicco">Januário Cicco</option>
                  <option value="Japi">Japi</option>
                  <option value="Jardim de Angicos">Jardim de Angicos</option>
                  <option value="Jardim de Piranhas">Jardim de Piranhas</option>
                  <option value="Jardim do Seridó">Jardim do Seridó</option>
                  <option value="João Câmara">João Câmara</option>
                  <option value="João Dias">João Dias</option>
                  <option value="José da Penha">José da Penha</option>
                  <option value="Jucurutu">Jucurutu</option>
                  <option value="Jundiá">Jundiá</option>
                  <option value="Lagoa dAnta">Lagoa dAnta</option>
                  <option value="Lagoa de Pedras">Lagoa de Pedras</option>
                  <option value="Lagoa de Velhos">Lagoa de Velhos</option>
                  <option value="Lagoa Nova">Lagoa Nova</option>
                  <option value="Lagoa Salgada">Lagoa Salgada</option>
                  <option value="Lajes">Lajes</option>
                  <option value="Lajes Pintadas">Lajes Pintadas</option>
                  <option value="Lucrécia">Lucrécia</option>
                  <option value="Luís Gomes">Luís Gomes</option>
                  <option value="Macaíba">Macaíba</option>
                  <option value="Macau">Macau</option>
                  <option value="Major Sales">Major Sales</option>
                  <option value="Marcelino Vieira">Marcelino Vieira</option>
                  <option value="Martins">Martins</option>
                  <option value="Maxaranguape">Maxaranguape</option>
                  <option value="Messias Targino">Messias Targino</option>
                  <option value="Montanhas">Montanhas</option>
                  <option value="Monte Alegre">Monte Alegre</option>
                  <option value="Monte das Gameleiras">
                    Monte das Gameleiras
                  </option>
                  <option value="Mossoró">Mossoró</option>
                  <option value="Natal">Natal</option>
                  <option value="Nísia Floresta">Nísia Floresta</option>
                  <option value="Nova Cruz">Nova Cruz</option>
                  <option value="Olho-dÁgua do Borges">
                    Olho-dÁgua do Borges
                  </option>
                  <option value="Ouro Branco">Ouro Branco</option>
                  <option value="Paraná">Paraná</option>
                  <option value="Paraú">Paraú</option>
                  <option value="Parazinho">Parazinho</option>
                  <option value="Parelhas">Parelhas</option>
                  <option value="Parnamirim">Parnamirim</option>
                  <option value="Passa e Fica">Passa e Fica</option>
                  <option value="Passagem">Passagem</option>
                  <option value="Patu">Patu</option>
                  <option value="Pau dos Ferros">Pau dos Ferros</option>
                  <option value="Pedra Grande">Pedra Grande</option>
                  <option value="Pedra Preta">Pedra Preta</option>
                  <option value="Pedro Avelino">Pedro Avelino</option>
                  <option value="Pedro Velho">Pedro Velho</option>
                  <option value="Pendências">Pendências</option>
                  <option value="Pilões">Pilões</option>
                  <option value="Poço Branco">Poço Branco</option>
                  <option value="Portalegre">Portalegre</option>
                  <option value="Porto do Mangue">Porto do Mangue</option>
                  <option value="Presidente Juscelino">
                    Presidente Juscelino
                  </option>
                  <option value="Pureza">Pureza</option>
                  <option value="Rafael Fernandes">Rafael Fernandes</option>
                  <option value="Rafael Godeiro">Rafael Godeiro</option>
                  <option value="Riacho da Cruz">Riacho da Cruz</option>
                  <option value="Riacho de Santana">Riacho de Santana</option>
                  <option value="Riachuelo">Riachuelo</option>
                  <option value="Rio do Fogo">Rio do Fogo</option>
                  <option value="Rodolfo Fernandes">Rodolfo Fernandes</option>
                  <option value="Ruy Barbosa">Ruy Barbosa</option>
                  <option value="Santa Cruz">Santa Cruz</option>
                  <option value="Santa Maria">Santa Maria</option>
                  <option value="Santana do Matos">Santana do Matos</option>
                  <option value="Santana do Seridó">Santana do Seridó</option>
                  <option value="Santo Antônio">Santo Antônio</option>
                  <option value="São Bento do Norte">São Bento do Norte</option>
                  <option value="São Bento do Trairí">
                    São Bento do Trairí
                  </option>
                  <option value="São Fernando">São Fernando</option>
                  <option value="São Francisco do Oeste">
                    São Francisco do Oeste
                  </option>
                  <option value="São Gonçalo do Amarante">
                    São Gonçalo do Amarante
                  </option>
                  <option value="São João do Sabugi">São João do Sabugi</option>
                  <option value="São José de Mipibu">São José de Mipibu</option>
                  <option value="São José do Campestre">
                    São José do Campestre
                  </option>
                  <option value="São José do Seridó">São José do Seridó</option>
                  <option value="São Miguel">São Miguel</option>
                  <option value="São Miguel do Gostoso">
                    São Miguel do Gostoso
                  </option>
                  <option value="São Paulo do Potengi">
                    São Paulo do Potengi
                  </option>
                  <option value="São Pedro">São Pedro</option>
                  <option value="São Rafael">São Rafael</option>
                  <option value="São Tomé">São Tomé</option>
                  <option value="São Vicente">São Vicente</option>
                  <option value="Senador Elói de Souza">
                    Senador Elói de Souza
                  </option>
                  <option value="Senador Georgino Avelino">
                    Senador Georgino Avelino
                  </option>
                  <option value="Serra de São Bento">Serra de São Bento</option>
                  <option value="Serra do Mel">Serra do Mel</option>
                  <option value="Serra Negra do Norte">
                    Serra Negra do Norte
                  </option>
                  <option value="Serrinha">Serrinha</option>
                  <option value="Serrinha dos Pintos">
                    Serrinha dos Pintos
                  </option>
                  <option value="Severiano Melo">Severiano Melo</option>
                  <option value="Sítio Novo">Sítio Novo</option>
                  <option value="Taboleiro Grande">Taboleiro Grande</option>
                  <option value="Taipu">Taipu</option>
                  <option value="Tangará">Tangará</option>
                  <option value="Tenente Ananias">Tenente Ananias</option>
                  <option value="Tenente Laurentino Cruz">
                    Tenente Laurentino Cruz
                  </option>
                  <option value="Tibau">Tibau</option>
                  <option value="Tibau do Sul">Tibau do Sul</option>
                  <option value="Timbaúba dos Batistas">
                    Timbaúba dos Batistas
                  </option>
                  <option value="Touros">Touros</option>
                  <option value="Triunfo Potiguar">Triunfo Potiguar</option>
                  <option value="Umarizal">Umarizal</option>
                  <option value="Upanema">Upanema</option>
                  <option value="Várzea">Várzea</option>
                  <option value="Venha-Ver">Venha-Ver</option>
                  <option value="Vera Cruz">Vera Cruz</option>
                  <option value="Viçosa">Viçosa</option>
                  <option value="Vila Flor">Vila Flor</option>
                </select>
              </div>
            </div>

            <h3 className="mt-3">
              5. Documentos de comprovação de identidade *
            </h3>
            <h5 className="mt-3">
              Junte algum documento que comprove a identificação do titular dos
              dados e do responsável (quando aplicável). Os formatos aceitos
              são: pdf, jpg, jpeg e png.
            </h5>
            <div className="mt-3">
              <label htmlFor="documentos">Documentos:</label>
              <input
                type="file"
                id="documentos"
                name="documentos"
                onChange={({ target }) => setDocumentos(target.value)}
              />
            </div>
            <div className="mt-4 flex justify-center">
              {!estaEnviando && (
                <button
                  type="submit"
                  className="btn signup px-8 py-4 text-lg hover:bg-green-600 hover:text-white"
                  onClick={handleSubmit}
                >
                  Enviar Formulário
                </button>
              )}
              {estaEnviando && (
                <button
                  disabled
                  type="submit"
                  className="btn signup px-8 py-4 text-lg hover:bg-green-600 hover:text-white"
                  onClick={handleSubmit}
                >
                  Enviando Formulário
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </Base>
  );
};

export default Services;
