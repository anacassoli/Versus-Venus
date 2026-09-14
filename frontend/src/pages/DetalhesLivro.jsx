
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  Bell,
  ArrowLeft,
  Edit3
} from "lucide-react";
import "../index.css";

export default function DetalheLivro() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [livro, setLivro] = useState(null);

  useEffect(() => {
    buscarLivro();
  }, []);

  async function buscarLivro() {
    try {
      const resposta = await fetch(
        `http://localhost:3000/livros/${id}`
      );

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
      <div className="app">

        <Sidebar />

        <main className="main">

          <header className="topbar">
            <h2>Livro</h2>

            <div className="top-icons">
              <Bell size={18} />

              <div className="avatar">
                A
              </div>
            </div>
          </header>

          <section className="page-content">
            <p>Carregando livro...</p>
          </section>

        </main>

      </div>
    );
  }

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <h2>Detalhes do livro</h2>

          <div className="top-icons">
            <Bell size={18} />

            <div className="avatar">
              A
            </div>
          </div>

        </header>

        <section className="page-content">

          <button
            className="detail-back"
            onClick={() => navigate("/livros")}
          >
            <ArrowLeft size={16} />
            Voltar para livros
          </button>

          <div className="book-detail">

            <div className="book-detail-cover">

              {livro.capa ? (

                <img
                  src={`http://localhost:3000${livro.capa}`}
                  alt={livro.titulo}
                />

              ) : (

                <div className="book-cover-placeholder">
                  📖
                </div>

              )}

            </div>

            <div className="book-detail-info">

              <span className="detail-label">
                DETALHES DO LIVRO
              </span>

              <h1>
                {livro.titulo}
              </h1>

              <p className="book-author">
                {livro.autor ||
                  "Autor não informado"}
              </p>

              <div className="book-info-box">

                <div>
                  <span>Gênero</span>

                  <strong>
                    {livro.genero ||
                      "Não informado"}
                  </strong>
                </div>

                <div>
                  <span>Ano de publicação</span>

                  <strong>
                    {livro.ano_publicacao ||
                      "Não informado"}
                  </strong>
                </div>

                <div>
                  <span>Editora</span>

                  <strong>
                    {livro.editora ||
                      "Não informada"}
                  </strong>
                </div>

              </div>

              <div className="book-description">

                <h3>
                  Sobre o livro
                </h3>

                <p>
                  {livro.descricao ||
                    "Nenhuma descrição cadastrada."}
                </p>

              </div>

              <div className="detail-actions">

                <button
                  className="back-button"
                  onClick={() =>
                    navigate("/livros")
                  }
                >
                  <ArrowLeft size={15} />
                  Voltar
                </button>

                <button
                  className="edit-button"
                  onClick={() =>
                    navigate(
                      `/livros/${livro.id}/editar`
                    )
                  }
                >
                  <Edit3 size={15} />
                  Editar livro
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}
