
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../index.css";

export default function NovoLivro() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [editora, setEditora] = useState("");
  const [descricao, setDescricao] = useState("");

  async function salvarLivro(event) {
    event.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/livros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          autor,
          genero,
          ano,
          editora,
          descricao,
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar livro");
      }

      navigate("/livros");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="new-book-page">

      <button
        className="back"
        onClick={() => navigate("/livros")}
      >
        ← voltar
      </button>

      <h1>Adicionar um novo livro</h1>

      <div className="new-book-content">

        <div className="upload-box">

          <div className="upload-icon">
            ☁
          </div>

          <p>Adicionar capa</p>

        </div>

        <form
          className="book-form"
          onSubmit={salvarLivro}
        >

          <label>Título</label>

          <input
            placeholder="Digite o título do livro"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label>Autor</label>

          <input
            placeholder="Digite o autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />

          <label>Gênero</label>

          <input
            placeholder="Digite o gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />

          <label>Ano de publicação</label>

          <input
            type="number"
            placeholder="Ex: 2000"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />

          <label>Editora</label>

          <input
            placeholder="Digite a editora"
            value={editora}
            onChange={(e) => setEditora(e.target.value)}
            required
          />

          <label>Descrição</label>

          <textarea
            placeholder="Fale sobre o livro..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>

          <div className="form-buttons">

            <button
              type="button"
              className="cancel"
              onClick={() => navigate("/livros")}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="save"
            >
              Salvar
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

