import { useNavigate } from "react-router-dom";
import "./DetalhesLivro.css";

function DetalhesLivro() {
  const navigate = useNavigate();

  return (
    <div className="detalhes-page">

      <header className="detalhes-header">

        <div className="detalhes-logo">
          <span>Verso</span>
          <strong>&</strong>
          <span>Vênus</span>
        </div>

        <nav className="detalhes-nav">

          <button onClick={() => navigate("/dashboard")}>
            Início
          </button>

          <button onClick={() => navigate("/livros")}>
            Livros
          </button>

          <button onClick={() => navigate("/autores")}>
            Autores
          </button>

          <button onClick={() => navigate("/perfil")}>
            Perfil
          </button>

          <button onClick={() => navigate("/")}>
            Sair
          </button>

        </nav>

      </header>


      <main className="detalhes-content">

        <button
          className="voltar-button"
          onClick={() => navigate("/livros")}
        >
          ← Voltar para livros
        </button>


        <section className="livro-detalhes">

          <div className="detalhes-capa">
            <span>Verso & Vênus</span>
          </div>


          <div className="detalhes-info">

            <span className="detalhes-genero">
              ROMANCE
            </span>

            <h1>
              Livro em destaque
            </h1>

            <p className="detalhes-autor">
              Nome do Autor
            </p>

            <p className="detalhes-descricao">
              Aqui ficará a descrição do livro. Você poderá
              conhecer um pouco mais sobre a história, os
              personagens e o universo criado pelo autor.
            </p>


            <div className="detalhes-informacoes">

              <div>
                <span>Autor</span>
                <p>Nome do Autor</p>
              </div>

              <div>
                <span>Gênero</span>
                <p>Romance</p>
              </div>

              <div>
                <span>Ano</span>
                <p>2026</p>
              </div>

            </div>


            <button className="favorito-button">
              ♡ Adicionar aos favoritos
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default DetalhesLivro;