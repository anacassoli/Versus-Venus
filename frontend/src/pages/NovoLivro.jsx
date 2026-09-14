
import { useNavigate } from "react-router-dom";

import "../styles/NovoLivro.css";

function NovoLivro() {
  const navigate = useNavigate();

  function handleSalvar(event) {
    event.preventDefault();

    // Depois vamos conectar essa parte com a API
    navigate("/livros");
  }

  return (
    <div className="novo-livro-page">

      <aside className="sidebar">

        <div className="sidebar-logo">
          ☰
        </div>

        <nav className="sidebar-menu">

          <button onClick={() => navigate("/dashboard")}>
            ⌂
            <span>Início</span>
          </button>

          <button
            onClick={() => navigate("/livros")}
            className="active"
          >
            ▣
            <span>Livros</span>
          </button>

          <button onClick={() => navigate("/autores")}>
            ♧
            <span>Autores</span>
          </button>

          <button>
            ♙
            <span>Usuários</span>
          </button>

          <button onClick={() => navigate("/perfil")}>
            ♙
            <span>Meu Perfil</span>
          </button>

        </nav>

        <button
          className="sidebar-sair"
          onClick={() => navigate("/")}
        >
          ⇥
        </button>

      </aside>

      <main className="novo-livro-content">

        <button
          className="voltar-button"
          onClick={() => navigate("/livros")}
        >
          ← voltar
        </button>

        <h1>Adicionar um novo livro</h1>

        <div className="novo-livro-form">

          <div className="capa-area">

            <label>Imagem da capa do livro</label>

            <div className="capa-upload">
              <div className="upload-icon">
                ♧
              </div>

              <span>Adicionar capa</span>
            </div>

          </div>

          <form onSubmit={handleSalvar}>

            <div className="form-group">
              <label htmlFor="titulo">
                Título
              </label>

              <input
                type="text"
                id="titulo"
                placeholder="Digite o título do livro"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="autor">
                Autor
              </label>

              <input
                type="text"
                id="autor"
                placeholder="Digite o autor"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="genero">
                Gênero
              </label>

              <input
                type="text"
                id="genero"
                placeholder="Digite o gênero"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ano">
                Ano de publicação
              </label>

              <input
                type="number"
                id="ano"
                placeholder="Digite o ano"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="editora">
                Editora
              </label>

              <input
                type="text"
                id="editora"
                placeholder="Digite a editora"
                required
              />
            </div>

            <div className="descricao-area">

              <label htmlFor="descricao">
                Fale sobre o livro...
              </label>

              <textarea
                id="descricao"
                placeholder="Digite uma descrição do livro"
              ></textarea>

            </div>

            <div className="botoes-form">

              <button
                type="button"
                className="cancelar-button"
                onClick={() => navigate("/livros")}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="salvar-button"
              >
                Salvar
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default NovoLivro;
