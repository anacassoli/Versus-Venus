
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Bell, User, LogOut } from "lucide-react";
import "../index.css";

export default function Perfil() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
  });

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);

  function sair() {
    localStorage.removeItem("logado");
    localStorage.removeItem("usuario");

    navigate("/");
  }

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <h2>Meu Perfil</h2>

          <div className="top-icons">

            <Bell size={18} />

            <div className="avatar">
              {usuario.nome
                ? usuario.nome.charAt(0).toUpperCase()
                : "A"}
            </div>

          </div>

        </header>

        <section className="page-content">

          <div className="profile-card">

            <div className="profile-photo">
              <User size={45} />
            </div>

            <div className="profile-info">

              <h1>
                {usuario.nome || "Usuário"}
              </h1>

              <p>
                {usuario.email || "E-mail não informado"}
              </p>

            </div>

          </div>

          <div className="profile-actions">

            <button
              className="logout-profile"
              onClick={sair}
            >
              <LogOut size={17} />
              Sair da conta
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}
