import Link from "next/link";
import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Login() {
  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <h2>Página de Entrada</h2>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Digite seu usuário"
          className={styles.input}
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          className={styles.input}
        />

        <a className={styles.botao}>Login</a>
        <a href="register" className={styles.botao}>
          Cadastro
        </a>
      </form>
    </div>
  );
}
