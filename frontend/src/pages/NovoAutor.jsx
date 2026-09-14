
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../index.css";

export default function NovoAutor() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [anoNascimento, setAnoNascimento] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [foto, setFoto] = useState(null);

  async function salvarAutor(event) {
    event.preventDefault();

    try {
      const dados = new FormData();

      dados.append("nome", nome);
      dados.append("ano_nascimento", anoNascimento);
      dados.append("nacionalidade", nacionalidade);

      if (foto) {
        dados.append("foto", foto);
      }

      const resposta = await fetch("http://localhost:3000/autores", {
        method: "POST",
        body: dados,
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar autor");
      }

      navigate("/autores");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="new-book-page">

      <button
        className="back"
        onClick={() => navigate("/autores")}
      >
        ← voltar
      </button>

      <h1>Adicionar um novo autor</h1>

      <div className="new-book-content">

        <div className="upload-box">

          <div className="upload-icon">
            📷
          </div>

          <p>
            {foto ? foto.name : "Adicionar foto"}
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
          />

        </div>

        <form
          className="book-form"
          onSubmit={salvarAutor}
        >

          <label>Nome completo</label>

          <input
            type="text"
            placeholder="Digite o nome do autor"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
            <label>Ano de nascimento</label>
            <input
                type="number"
                placeholder="Digite o ano de nascimento"
                value={anoNascimento}
                onChange={(e) => setAnoNascimento(e.target.value)}
                required
            />
            <label>Nacionalidade</label>
            <input
                type="text"
                placeholder="Digite a nacionalidade"
                value={nacionalidade}
                onChange={(e) => setNacionalidade(e.target.value)}
                required
            />
            <button type="submit">
                Salvar autor
            </button>
        </form>
        </div>
    </div>
  );
}   
