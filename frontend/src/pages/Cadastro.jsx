
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../index.css";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function cadastrar() {
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não são iguais!");
      return;
    }

    localStorage.setItem(
      "cadastroUsuario",
      JSON.stringify({
        nome,
        email,
        senha,
      })
    );

    navigate("/");
  }

  function irParaLogin() {
    navigate("/");
  }

  return (
    <div className="auth-page">

      <div className="auth-content cadastro">

        <h1>Verso & Vênus</h1>

        <p>Crie sua conta para começar uma nova história!</p>

        <div className="auth-card cadastro-card">

          <h2>Criar conta</h2>

          <small>Preencha os dados para fazer o cadastro</small>

          <label>Nome completo</label>

          <input
            placeholder="Digite seu nome completo..."
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>E-mail</label>

          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha..."
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label>Confirmar senha</label>

          <input
            type="password"
            placeholder="Confirme sua senha..."
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <button className="btn-auth" onClick={cadastrar}>
            Cadastrar
          </button>

          {erro && (
            <p className="erro">
              {erro}
            </p>
          )}

          <p className="auth-link">
            Já tem uma conta?{" "}
            <span onClick={irParaLogin}>
              Faça login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

