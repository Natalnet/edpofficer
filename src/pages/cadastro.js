export default function Cadastro() {
    return (
        <div>
        <form>
            <h2>Cadastro</h2>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" />

            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" />

            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" />

            <label htmlFor="documents">Documentos:</label>
            <input type="file" id="documents" name="documents" />

            <input type="submit" value="Cadastrar" />
        </form>
        </div>
    );
}