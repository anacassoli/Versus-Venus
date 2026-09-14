
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function entrar(event) {

    event.preventDefault();

    setErro("");

    // Verifica se os campos foram preenchidos
    if (!email.trim() || !senha.trim()) {
      setErro("Preencha todos os campos.");
      return;
    }

    try {

      const resposta = await fetch(
        "http://localhost:3000/usuarios/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim(),
            senha,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {

        setErro(
          dados.erro || "E-mail ou senha incorretos."
        );

        return;
      }

      localStorage.setItem("logado", "true");

      localStorage.setItem(
        "usuario",
        JSON.stringify({
          id: dados.id,
          nome: dados.nome,
          email: dados.email,
        })
      );

      navigate("/dashboard");

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
          Entre na sua biblioteca
        </p>

        <form onSubmit={entrar}>

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
            Entrar
          </button>

        </form>

        <p className="login-register">

          Ainda não possui uma conta?

          <button
            type="button"
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </button>

        </p>

      </div>

    </div>
  );
}

