
import { useEffect, useState } from "react";
import { Bell, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
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

  function sairDaConta() {
    localStorage.removeItem("token");
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
              {usuario.nome ? usuario.nome.charAt(0).toUpperCase() : "U"}
            </div>
          </div>
        </header>

        <section className="profile-content">

          <div className="profile-card">

            <div className="profile-photo">
              {usuario.nome ? usuario.nome.charAt(0).toUpperCase() : "U"}

              <div className="camera">
                <Camera size={13} />
              </div>
            </div>

            <h2>
              {usuario.nome || "Usuário"}
            </h2>

            <p>
              {usuario.email || "E-mail não informado"}
            </p>

            <label>Nome completo</label>

            <input
              value={usuario.nome}
              readOnly
            />

            <label>E-mail</label>

            <input
              value={usuario.email}
              readOnly
            />

            <label>Senha</label>

            <input
              value="••••••••"
              readOnly
            />

            <button className="profile-save">
              Salvar alterações
            </button>

            <button
              className="delete-account"
              onClick={sairDaConta}
            >
              Sair da conta
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

