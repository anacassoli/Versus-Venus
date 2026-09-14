
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  Bell,
  Search,
  Plus,
  Edit3,
  Trash2,
  Eye
} from "lucide-react";
import "../index.css";

export default function Livros() {
  const navigate = useNavigate();

  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    buscarLivros();
  }, []);

  async function buscarLivros() {
    try {
      const resposta = await fetch(
        "http://localhost:3000/livros"
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar livros");
      }

      const dados = await resposta.json();

      setLivros(dados);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  async function excluirLivro(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este livro?"
    );

    if (!confirmar) {
      return;
    }

    try {
      const resposta = await fetch(
        `http://localhost:3000/livros/${id}`,
        {
          method: "DELETE"
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao excluir livro");
      }

      buscarLivros();
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">
          <h2>Livros</h2>

          <div className="top-icons">
            <Bell size={18} />

            <div className="avatar">
              A
            </div>
          </div>
        </header>

        <section className="page-content">

          <div className="books-header">

            <div>
              <h1 className="books-title">
                Minha biblioteca
              </h1>

              <p className="books-subtitle">
                Consulte e gerencie os livros cadastrados.
              </p>
            </div>

            <button
              className="new-button"
              onClick={() => navigate("/livros/novo")}
            >
              <Plus size={16} />
              Novo livro
            </button>

          </div>

          <div className="books-toolbar">

            <div className="search">
              <Search size={16} />

              <input
                type="text"
                placeholder="Buscar livro..."
                value={busca}
                onChange={(e) =>
                  setBusca(e.target.value)
                }
              />
            </div>

            <span className="books-count">
              {livrosFiltrados.length}{" "}
              {livrosFiltrados.length === 1
                ? "livro"
                : "livros"}
            </span>

          </div>

          <div className="book-list">

            {livrosFiltrados.length > 0 ? (

              livrosFiltrados.map((livro) => (

                <div
                  className="book-row"
                  key={livro.id}
                >

                  <div
                    className="mini-cover"
                    onClick={() =>
                      navigate(`/livros/${livro.id}`)
                    }
                  >

                    {livro.capa ? (
                      <img
                        src={`http://localhost:3000${livro.capa}`}
                        alt={livro.titulo}
                      />
                    ) : (
                      <span>📖</span>
                    )}

                  </div>

                  <div
                    className="book-info"
                    onClick={() =>
                      navigate(`/livros/${livro.id}`)
                    }
                  >

                    <h3>
                      {livro.titulo}
                    </h3>

                    <p>
                      {livro.autor ||
                        "Autor não informado"}
                    </p>

                    <small>
                      {livro.genero ||
                        "Sem gênero"}

                      {" · "}

                      {livro.ano_publicacao ||
                        "Ano não informado"}

                      {livro.editora &&
                        ` · ${livro.editora}`}
                    </small>

                  </div>

                  <div className="actions">

                    <button
                      className="book-action edit"
                      title="Editar livro"
                      onClick={() =>
                        navigate(
                          `/livros/${livro.id}/editar`
                        )
                      }
                    >
                      <Edit3 size={15} />
                    </button>

                    <button
                      className="book-action view"
                      title="Ver livro"
                      onClick={() =>
                        navigate(
                          `/livros/${livro.id}`
                        )
                      }
                    >
                      <Eye size={15} />
                    </button>

                    <button
                      className="book-action delete"
                      title="Excluir livro"
                      onClick={() =>
                        excluirLivro(livro.id)
                      }
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>

                </div>

              ))

            ) : (

              <div className="empty-books">
                <span>📚</span>

                <h3>
                  Nenhum livro encontrado
                </h3>

                <p>
                  Tente buscar por outro título.
                </p>
              </div>

            )}

          </div>

        </section>

      </main>

    </div>
  );
}
