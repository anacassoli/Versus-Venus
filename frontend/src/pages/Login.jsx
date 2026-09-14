
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  function entrar() {
    if (email === "biblioteca@gmail.com" && senha === "123456") {
      localStorage.setItem("logado", "true");

      localStorage.setItem(
        "usuario",
        JSON.stringify({
          nome: "Usuário Teste",
          email: "biblioteca@gmail.com",
        })
      );

      navigate("/dashboard");
    } else {
      setErro("E-mail ou senha incorretos!");
    }
  }

  function irParaCadastro() {
    navigate("/cadastro");
  }

  return (
    <div className="auth-page">

      <div className="auth-content">

        <h1>Verso & Vênus</h1>

        <p>Seu próximo capítulo começa aqui!</p>

        <div className="auth-card">

          <h2>Bem vindo de volta!</h2>

          <small>Entre para continuar</small>

          <label>E-mail</label>

          <input
            type="email"
            placeholder="Insira seu e-mail aqui"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Insira sua senha aqui"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="btn-auth" onClick={entrar}>
            Entrar
          </button>

          {erro && (
            <p className="erro">
              {erro}
            </p>
          )}

          <p className="auth-link">
            Não tem uma conta?{" "}
            <span onClick={irParaCadastro}>
              Cadastre-se
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}
