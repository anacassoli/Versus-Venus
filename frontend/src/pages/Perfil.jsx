import Sidebar from "../components/Sidebar";
import { Bell, Camera } from "lucide-react";
import "../index.css";

export default function Perfil() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">
          <h2>Meu Perfil</h2>

          <div className="top-icons">
            <Bell size={18} />
            <div className="avatar">A</div>
          </div>
        </header>

        <section className="profile-content">

          <div className="profile-card">

            <div className="profile-photo">
              V
              <div className="camera">
                <Camera size={13} />
              </div>
            </div>

            <h2>Virginia</h2>
            <p>virginia@gmail.com</p>

            <label>Nome completo</label>
            <input value="Virginia" readOnly />

            <label>E-mail</label>
            <input value="virginia@gmail.com" readOnly />

            <label>Senha</label>
            <input value="••••••••" readOnly />

            <button className="profile-save">
              Salvar alterações
            </button>

            <button className="delete-account">
              Sair da conta
            </button>

          </div>

        </section>

      </main>
    </div>
  );
}