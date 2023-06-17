import styles from "../styles/page.module.css";

export default function Register() {
  return (
    <>
      <div>
        <form className={styles.form}>
          <h2>Cadastro</h2>

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu email"
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

          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite seu CPF"
            className={styles.input}
          />

          <label htmlFor="documents">Documentos:</label>
          <input type="file" id="documents" name="documents" />

          <input type="submit" value="Cadastrar" className={styles.botao} />
        </form>
      </div>
    </>
  );
}