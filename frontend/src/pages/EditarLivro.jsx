
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../index.css";

function EditarLivro() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    buscarLivro();
  }, [id]);

  async function buscarLivro() {
    try {
      const resposta = await fetch(
        `http://localhost:3000/livros/${id}`
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar livro");
      }

      const livro = await resposta.json();

      setTitulo(livro.titulo || "");
      setAutor(livro.autor || "");
      setGenero(livro.genero || "");
      setAno(livro.ano || "");
      setDescricao(livro.descricao || "");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function salvarAlteracoes() {
    try {
      const resposta = await fetch(
        `http://localhost:3000/livros/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo,
            autor,
            genero,
            ano,
            descricao,
          }),
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao atualizar livro");
      }

      navigate("/livros");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="editar-livro">

      <header className="editar-livro-header">

        <h1>Editar Livro</h1>

        <button
          className="btn-voltar"
          onClick={() => navigate("/livros")}
        >
          Voltar
        </button>

      </header>

      <main className="editar-livro-content">

        <div className="editar-livro-card">

          <div className="campo">

            <label>Título do livro</label>

            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Autor</label>

            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Gênero</label>

            <input
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Ano de publicação</label>

            <input
              type="number"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Descrição</label>

            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>

          </div>

          <button
            className="btn-salvar"
            onClick={salvarAlteracoes}
          >
            Salvar alterações
          </button>

        </div>

      </main>

    </div>
  );
}

export default EditarLivro;

