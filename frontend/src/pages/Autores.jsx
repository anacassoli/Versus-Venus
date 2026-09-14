import { useNavigate } from "react-router-dom";
import "../styles/Autores.css";

function Autores() {
  const navigate = useNavigate();

  const autores = [
    {
      id: 1,
      nome: "Colleen Hoover",
      livros: "É assim que acaba",
    },
    {
      id: 2,
      nome: "Chloe Walsh",
      livros: "Binding 13",
    },
    {
      id: 3,
      nome: "Alice Kellen",
      livros: "De mil jeitos diferentes",
    },
  ];

  return (
    <div className="autores-page">

      <header className="autores-header">

        <div className="autores-logo">
          <span>Verso</span>
          <strong>&</strong>
          <span>Vênus</span>
        </div>

        <nav className="autores-nav">

          <button onClick={() => navigate("/dashboard")}>
            Início
          </button>

          <button onClick={() => navigate("/livros")}>
            Livros
          </button>

          <button className="active">
            Autores
          </button>

          <button onClick={() => navigate("/")}>
            Sair
          </button>

        </nav>

      </header>


      <main className="autores-content">

        <section className="autores-title">

          <p>Conheça quem está por trás das histórias</p>

          <h1>Autores</h1>

          <span>
            Descubra novos escritores e suas histórias.
          </span>

        </section>


        <div className="autores-lista">

          {autores.map((autor) => (
            <div className="autor-card" key={autor.id}>

              <div className="autor-foto">
                <span>
                  {autor.nome.charAt(0)}
                </span>
              </div>

              <div className="autor-info">

                <h2>{autor.nome}</h2>

                <p>
                  Livro em destaque: {autor.livros}
                </p>

                <button>
                  Ver livros
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default Autores;