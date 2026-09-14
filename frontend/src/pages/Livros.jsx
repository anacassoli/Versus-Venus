
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
      const resposta = await fetch("http://localhost:3000/livros");

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
    livro.titulo.toLowerCase().includes(busca.toLowerCase())
  );

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

          <div className="page-actions">

            <div className="search">

              <Search size={15} />

              <input
                placeholder="Buscar livro..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />

            </div>

            <button className="filter">
              ⚱ Filtros
            </button>

            <button
              className="new-button"
              onClick={() => navigate("/livros/novo")}
            >
              <Plus size={15} />
              Novo livro
            </button>

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
                    onClick={() => navigate(`/livros/${livro.id}`)}
                  ></div>

                  <div
                    className="book-info"
                    onClick={() => navigate(`/livros/${livro.id}`)}
                  >

                    <h3>{livro.titulo}</h3>

                    <p>{livro.autor}</p>

                    <small>
                      {livro.genero} · {livro.ano}
                    </small>

                  </div>

                  <span
                    className={
                      livro.disponivel
                        ? "status available"
                        : "status borrowed"
                    }
                  >
                    {livro.disponivel
                      ? "Disponível"
                      : "Emprestado"}
                  </span>

                  <div className="actions">

                    <Edit3
                      size={14}
                      onClick={() =>
                        navigate(`/livros/${livro.id}/editar`)
                      }
                    />

                    <Eye
                      size={14}
                      onClick={() =>
                        navigate(`/livros/${livro.id}`)
                      }
                    />

                    <Trash2 size={14} />

                  </div>

                </div>

              ))

            ) : (

              <p>Nenhum livro encontrado.</p>

            )}

          </div>

        </section>

      </main>

    </div>
  );
}
