import Sidebar from "../components/Sidebar";
import { Bell, Search, Plus, Edit3, Eye, Trash2 } from "lucide-react";
import "../index.css";

const autores = [
  ["Ali Hazelwood", "1989", "Italiana"],
  ["Chloe Walsh", "1985", "Irlandesa"],
  ["Kristen Ciccarelli", "1981", "Canadense"],
  ["Colleen Hoover", "1979", "Americana"],
  ["Stephanie Garber", "1986", "Americana"]
];

export default function Autores() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">
          <h2>Autores</h2>

          <div className="top-icons">
            <Bell size={18} />
            <div className="avatar">A</div>
          </div>
        </header>

        <section className="page-content">

          <div className="page-actions">

            <div className="search author-search">
              <Search size={15} />
              <input placeholder="Buscar autor..." />
            </div>

            <button className="new-button">
              <Plus size={15} />
              Novo autor
            </button>

          </div>

          <div className="author-list">

            {autores.map((autor, index) => (
              <div className="author-row" key={index}>

                <div className="author-photo">
                  {autor[0][0]}
                </div>

                <div>
                  <h3>{autor[0]}</h3>
                  <p>{autor[1]} · {autor[2]}</p>
                </div>

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