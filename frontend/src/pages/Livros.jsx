import Sidebar from "../components/Sidebar";
import { Bell, Search, Plus, Edit3, Trash2, Eye } from "lucide-react";
import "../index.css";

const livros = [
  {
    titulo: "A Hipótese do Amor",
    autor: "Ali Hazelwood",
    genero: "Romance",
    ano: "2022"
  },
  {
    titulo: "Binding 13",
    autor: "Chloe Walsh",
    genero: "Romance",
    ano: "2018"
  },
  {
    titulo: "Caçador sem coração",
    autor: "Kristen Ciccarelli",
    genero: "Fantasia",
    ano: "2024"
  },
  {
    titulo: "Verity",
    autor: "Colleen Hoover",
    genero: "Suspense",
    ano: "2018"
  },
  {
    titulo: "Era uma vez um coração partido",
    autor: "Stephanie Garber",
    genero: "Fantasia",
    ano: "2021"
  }
];

export default function Livros() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">
          <h2>Livros</h2>

          <div className="top-icons">
            <Bell size={18} />
            <div className="avatar">A</div>
          </div>
        </header>

        <section className="page-content">

          <div className="page-actions">

            <div className="search">
              <Search size={15} />
              <input placeholder="Buscar livro..." />
            </div>

            <button className="filter">
              ⚱ Filtros
            </button>

            <button className="new-button">
              <Plus size={15} />
              Novo livro
            </button>

          </div>

          <div className="book-list">

            {livros.map((livro, index) => (
              <div className="book-row" key={index}>

                <div className="mini-cover"></div>

                <div className="book-info">
                  <h3>{livro.titulo}</h3>
                  <p>{livro.autor}</p>
                  <small>
                    {livro.genero} · {livro.ano}
                  </small>
                </div>

                <span className={
                  index === 0 || index === 4
                    ? "status borrowed"
                    : "status available"
                }>
                  {index === 0 || index === 4
                    ? "Emprestado"
                    : "Disponível"}
                </span>

                <div className="actions">
                  <Edit3 size={14} />
                  <Eye size={14} />
                  <Trash2 size={14} />
                </div>

              </div>
            ))}

          </div>

        </section>

      </main>
    </div>
  );
}