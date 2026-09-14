
import { useNavigate } from "react-router-dom";
import "../styles/Livros.css";

function Livros() {
  const navigate = useNavigate();

  const livros = [
    {
      id: 1,
      titulo: "Livro 1",
      autor: "Nome do Autor",
      genero: "Romance",
    },
    {
      id: 2,
      titulo: "Livro 2",
      autor: "Nome do Autor",
      genero: "Fantasia",
    },
    {
      id: 3,
      titulo: "Livro 3",
      autor: "Nome do Autor",
      genero: "Drama",
    },
  ];

  return (
    <div className="livros-page">

      <header className="livros-header">

        <div className="livros-logo">
          <span>Verso</span>
          <strong>&</strong>
          <span>Vênus</span>
        </div>

        <nav className="livros-nav">
          <button onClick={() => navigate("/dashboard")}>
            Início
          </button>

          <button className="active">
            Livros
          </button>

          <button onClick={() => navigate("/autores")}>
            Autores
          </button>

          <button onClick={() => navigate("/")}>
            Sair
          </button>
        </nav>

      </header>


      <main className="livros-content">

        <section className="livros-title">

          <p>Explore nossa coleção</p>

          <h1>Livros</h1>

          <span>
            Encontre uma nova história para chamar de favorita.
          </span>

        </section>


        <div className="livros-lista">

          {livros.map((livro) => (
            <div className="livro-card" key={livro.id}>

              <div className="livro-capa">
                <span>Verso & Vênus</span>
              </div>

              <div className="livro-info">

                <span className="livro-genero">
                  {livro.genero}
                </span>

                <h2>{livro.titulo}</h2>

                <p>{livro.autor}</p>

                <button>
                  Ver detalhes
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default Livros;