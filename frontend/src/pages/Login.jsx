
import { Link, useNavigate } from "react-router-dom";

import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    // Usuário de teste
    if (email === "teste@versoenus.com" && senha === "123456") {
      localStorage.setItem("token", "teste-logado");
      navigate("/dashboard");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <span>Verso</span>
          <strong>&</strong>
          <span>Vênus</span>
        </div>

        <p className="login-subtitle">
          Onde cada história encontra você
        </p>

        <h1>Bem-vindo!</h1>

        <p className="login-description">
          Entre na sua conta para continuar.
        </p>

        <form onSubmit={handleLogin}>
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

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>

            <a href="#" className="forgot-password">
              Esqueci minha senha
            </a>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <div className="register-area">
          <span>Não possui uma conta?</span>

          <Link to="/cadastro">
            Cadastre-se
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;