import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <form>
        <h2>Página de Entrada</h2>

        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Digite seu usuário"
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
        />

        <a href="cadastro.html" className="botao">
          Login
        </a>
        <a href="cadastro.html" className="botao">
          Cadastro
        </a>
      </form>
    </div>
  );
}
