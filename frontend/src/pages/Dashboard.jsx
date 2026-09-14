
import Sidebar from "../components/Sidebar";

import { Bell, User } from "lucide-react";

import "../index.css";

export default function Dashboard() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <div></div>

          <div className="top-icons">
            <Bell size={18} />
            <div className="avatar">A</div>
          </div>

        </header>

        <section className="dashboard">

          <div className="metrics">

            <div className="metric">
              <strong>--</strong>
              <span>Livros</span>
              <BookIcon />
            </div>

            <div className="metric">
              <strong>--</strong>
              <span>Autores</span>
              <User size={40} />
            </div>

            <div className="metric">
              <strong>--</strong>
              <span>Usuários</span>
              <User size={40} />
            </div>

            <div className="metric">
              <strong>--</strong>
              <span>Disponíveis</span>
              <BookIcon />
            </div>

          </div>

          <h3>Livros adicionados recentemente</h3>

          <div className="recent-books">

            <div className="recent-book">
              <div className="book-cover"></div>

              <div>
                <h3>Carregando...</h3>
                <p>--</p>
              </div>
            </div>

            <div className="recent-book">
              <div className="book-cover"></div>

              <div>
                <h3>Carregando...</h3>
                <p>--</p>
              </div>
            </div>

            <div className="recent-book">
              <div className="book-cover"></div>

              <div>
                <h3>Carregando...</h3>
                <p>--</p>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

function BookIcon() {
  return <span className="book-icon">📖</span>;
}
