import { Link, useNavigate } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  function handleCadastro(event) {
    event.preventDefault();

    // Depois vamos conectar essa parte com a API
    navigate("/dashboard");
  }

  return (
    <div className="cadastro-page">

      <div className="cadastro-card">

        <div className="cadastro-logo">
          <span>Verso</span>
          <strong>&</strong>
          <span>Vênus</span>
        </div>

        <p className="cadastro-subtitle">
          Onde cada história encontra você
        </p>

        <h1>Crie sua conta</h1>

        <p className="cadastro-description">
          Cadastre-se para começar sua experiência.
        </p>

        <form onSubmit={handleCadastro}>

          <div className="input-group">
            <label htmlFor="nome">Nome</label>

            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>

            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>

            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmar-senha">Confirmar senha</label>

            <input
              type="password"
              id="confirmar-senha"
              placeholder="Confirme sua senha"
              required
            />
          </div>

          <button type="submit" className="cadastro-button">
            Criar conta
          </button>

        </form>

        <div className="login-area">
          <span>Já possui uma conta?</span>

          <Link to="/">
            Entrar
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Cadastro;