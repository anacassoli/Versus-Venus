
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Bell,
  BookOpen,
  Users,
  Tags,
  UserRound
} from "lucide-react";
import "../index.css";

export default function Dashboard() {

  const [dados, setDados] = useState({
    livros: 0,
    autores: 0,
    generos: 0,
    usuarios: 0,
  });

  useEffect(() => {
    buscarDados();
  }, []);

  async function buscarDados() {
    try {
      const resposta = await fetch(
        "http://localhost:3000/dashboard"
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const resultado = await resposta.json();

      setDados(resultado);

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <h2>Início</h2>

          <div className="top-icons">

            <Bell size={18} />

            <div className="avatar">
              A
            </div>

          </div>

        </header>

        <section className="page-content">

          <h1 className="dashboard-title">
            Olá! 👋
          </h1>

          <p className="dashboard-subtitle">
            Bem-vindo ao Verso & Vênus.
          </p>

          <div className="dashboard-cards">

            <div className="dashboard-card">

              <div className="dashboard-icon">
                <BookOpen size={22} />
              </div>

              <div>

                <span>
                  Livros
                </span>

                <strong>
                  {dados.livros}
                </strong>

              </div>

            </div>

            <div className="dashboard-card">

              <div className="dashboard-icon">
                <Users size={22} />
              </div>

              <div>

                <span>
                  Autores
                </span>

                <strong>
                  {dados.autores}
                </strong>

              </div>

            </div>

            <div className="dashboard-card">

              <div className="dashboard-icon">
                <Tags size={22} />
              </div>

              <div>

                <span>
                  Gêneros
                </span>

                <strong>
                  {dados.generos}
                </strong>

              </div>

            </div>

            <div className="dashboard-card">

              <div className="dashboard-icon">
                <UserRound size={22} />
              </div>

              <div>

                <span>
                  Usuários
                </span>

                <strong>
                  {dados.usuarios}
                </strong>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}
