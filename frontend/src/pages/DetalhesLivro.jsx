
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../index.css";

export default function DetalheLivro() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [livro, setLivro] = useState(null);

  useEffect(() => {
    buscarLivro();
  }, [id]);

  async function buscarLivro() {
    try {
      const resposta = await fetch(`http://localhost:3000/livros/${id}`);

      if (!resposta.ok) {
        throw new Error("Erro ao buscar livro");
      }

      const dados = await resposta.json();

      setLivro(dados);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  if (!livro) {
    return (
      <div className="book-detail">
        <p>Carregando livro...</p>
      </div>
    );
  }

  return (
    <div className="book-detail">

      <button
        className="back"
        onClick={() => navigate("/livros")}
      >
        ← voltar
      </button>

      <div className="detail-content">

        <div className="detail-cover">

          <div className="cover-placeholder">
            {livro.titulo}
          </div>

        </div>

        <div className="detail-text">

          <h1>{livro.titulo}</h1>

          <p>
            {livro.descricao || "Descrição não informada."}
          </p>

          <div className="detail-box">

            <p>
              <strong>Gênero</strong>{" "}
              {livro.genero || "--"}
            </p>

            <p>
              <strong>Ano</strong>{" "}
              {livro.ano || "--"}
            </p>

            <p>
              <strong>Autor</strong>{" "}
              {livro.autor || "--"}
            </p>

            <p>
              <strong>Editora</strong>{" "}
              {livro.editora || "--"}
            </p>

          </div>

          <div className="stars">
            ☆ ☆ ☆ ☆ ☆
          </div>

        </div>

      </div>

    </div>
  );
}

