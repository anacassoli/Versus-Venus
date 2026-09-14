import { useNavigate } from "react-router-dom";
import "./Perfil.css";

function Perfil() {
  const navigate = useNavigate();

  return (
    <div className="perfil-page">

      <header className="perfil-header">

        <div className="perfil-logo">
          <span>Verso</span>
          <strong>&</strong>
          <span>Vênus</span>
        </div>

        <nav className="perfil-nav">

          <button onClick={() => navigate("/dashboard")}>
            Início
          </button>

          <button onClick={() => navigate("/livros")}>
            Livros
          </button>

          <button onClick={() => navigate("/autores")}>
            Autores
          </button>

          <button className="active">
            Perfil
          </button>

          <button onClick={() => navigate("/")}>
            Sair
          </button>

        </nav>

      </header>


      <main className="perfil-content">

        <section className="perfil-title">

          <p>Suas informações</p>

          <h1>Meu perfil</h1>

          <span>
            Gerencie suas informações dentro da plataforma.
          </span>

        </section>


        <section className="perfil-card">

          <div className="perfil-avatar">
            A
          </div>

          <div className="perfil-info">

            <h2>Olá!</h2>

            <div className="perfil-item">
              <span>Nome</span>
              <p>Seu nome</p>
            </div>

            <div className="perfil-item">
              <span>E-mail</span>
              <p>seuemail@email.com</p>
            </div>

          </div>

          <button className="editar-button">
            Editar informações
          </button>

        </section>

      </main>

    </div>
  );
}

export default Perfil;