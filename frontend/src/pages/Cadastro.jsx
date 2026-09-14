
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Cadastro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function cadastrar(event) {

    event.preventDefault();

    setErro("");

    // Verifica se os campos foram preenchidos
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro("Preencha todos os campos.");
      return;
    }

    // Verifica o tamanho da senha
    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {

      const resposta = await fetch(
        "http://localhost:3000/usuarios",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nome: nome.trim(),
            email: email.trim(),
            senha,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {

        setErro(
          dados.erro || "Erro ao cadastrar usuário."
        );

        return;
      }

      navigate("/");

    } catch (error) {

      console.error("Erro:", error);

      setErro(
        "Não foi possível conectar ao servidor."
      );
    }
  }

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>Verso & Vênus</h1>

        <p className="login-subtitle">
          Crie sua conta
        </p>

        <form onSubmit={cadastrar}>

          <label>
            Nome
          </label>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label>
            E-mail
          </label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>
            Senha
          </label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          {erro && (
            <p className="login-error">
              {erro}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Criar conta
          </button>

        </form>

        <p className="login-register">

          Já possui uma conta?

          <button
            type="button"
            onClick={() => navigate("/")}
          >
            Entrar
          </button>

        </p>

      </div>

    </div>
  );
}

