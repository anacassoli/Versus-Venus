
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  Bell,
  Search,
  Plus,
  Edit3,
  Eye,
  Trash2
} from "lucide-react";
import "../index.css";

export default function Autores() {
  const navigate = useNavigate();

  const [autores, setAutores] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    buscarAutores();
  }, []);

  async function buscarAutores() {
    try {
      const resposta = await fetch("http://localhost:3000/autores");

      if (!resposta.ok) {
        throw new Error("Erro ao buscar autores");
      }

      const dados = await resposta.json();

      setAutores(dados);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function excluirAutor(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este autor?"
    );

    if (!confirmar) {
      return;
    }

    try {
      const resposta = await fetch(
        `http://localhost:3000/autores/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao excluir autor");
      }

      buscarAutores();
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  const autoresFiltrados = autores.filter((autor) =>
    autor.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <h2>Autores</h2>

          <div className="top-icons">

            <Bell size={18} />

            <div className="avatar">
              A
            </div>

          </div>

        </header>

        <section className="page-content">

          <div className="page-actions">

            <div className="search author-search">

              <Search size={15} />

              <input
                placeholder="Buscar autor..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />

            </div>

            <button
              className="new-button"
              onClick={() => navigate("/autores/novo")}
            >
              <Plus size={15} />
              Novo autor
            </button>

          </div>

          <div className="author-list">

            {autoresFiltrados.length > 0 ? (

              autoresFiltrados.map((autor) => (

                <div
                  className="author-row"
                  key={autor.id}
                >

                  <div className="author-photo">

                    {autor.foto ? (

                      <img
                        src={`http://localhost:3000${autor.foto}`}
                        alt={autor.nome}
                      />

                    ) : (

                      <span>
                        {autor.nome?.charAt(0).toUpperCase()}
                      </span>

                    )}

                  </div>

                  <div>

                    <h3>
                      {autor.nome}
                    </h3>

                    <p>
                      {autor.ano_nascimento || "--"} ·{" "}
                      {autor.nacionalidade || "--"}
                    </p>

                  </div>

                  <div className="actions">

                    <Edit3
  size={14}
  onClick={() => navigate(`/autores/${autor.id}/editar`)}
  style={{ cursor: "pointer" }}
/>

                    <Eye
  size={14}
  onClick={() => navigate(`/autores/${autor.id}`)}
  style={{ cursor: "pointer" }}
/>

                    <Trash2
                      size={14}
                      onClick={() => excluirAutor(autor.id)}
                      style={{ cursor: "pointer" }}
                    />

                  </div>

                </div>

              ))

            ) : (

              <p>
                Nenhum autor encontrado.
              </p>

            )}

          </div>

        </section>

      </main>

    </div>
  );
}
