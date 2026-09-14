import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="dashboard-page">

      <header className="dashboard-header">

        <div className="dashboard-logo">
          <span>Verso</span>
          <strong>&</strong>
          <span>Vênus</span>
        </div>

        <nav className="dashboard-nav">
          <button onClick={() => navigate("/dashboard")}>
            Início
          </button>

          <button onClick={() => navigate("/livros")}>
            Livros
          </button>

          <button onClick={() => navigate("/autores")}>
            Autores
          </button>

          <button onClick={handleLogout}>
            Sair
          </button>
        </nav>

      </header>


      <main className="dashboard-content">

        <section className="welcome-section">

          <p className="welcome-small">
            Bem-vindo ao
          </p>

          <h1>
            Verso <span>&</span> Vênus
          </h1>

          <p className="welcome-text">
            Encontre histórias, conheça novos mundos
            e descubra livros que podem conquistar você.
          </p>

        </section>


        <section className="dashboard-options">

          <div className="dashboard-card">
            <h2>Livros</h2>

            <p>
              Explore nossa coleção de livros e encontre
              sua próxima leitura.
            </p>

            <button onClick={() => navigate("/livros")}>
              Ver livros
            </button>
          </div>


          <div className="dashboard-card">
            <h2>Autores</h2>

            <p>
              Conheça os autores por trás das histórias
              que fazem parte do nosso universo.
            </p>

            <button onClick={() => navigate("/autores")}>
              Ver autores
            </button>
          </div>


          <div className="dashboard-card">
            <h2>Seu perfil</h2>

            <p>
              Acesse suas informações e personalize
              sua experiência.
            </p>

            <button onClick={() => navigate("/perfil")}>
              Meu perfil
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;