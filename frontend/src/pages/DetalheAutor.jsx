
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

export default function DetalheAutor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [autor, setAutor] = useState(null);

  useEffect(() => {
    buscarAutor();
  }, [id]);

  async function buscarAutor() {
    try {
      const resposta = await fetch(
        `http://localhost:3000/autores/${id}`
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar autor");
      }

      const dados = await resposta.json();

      setAutor(dados);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  if (!autor) {
    return (
      <div className="autor-detail-page">
        <p>Carregando autor...</p>
      </div>
    );
  }

  return (
    <div className="autor-detail-page">

      <button
        className="autor-back"
        onClick={() => navigate("/autores")}
      >
        ← voltar
      </button>

      <div className="autor-detail-content">

        <div className="autor-detail-cover">

          {autor.foto ? (
            <img
              src={`http://localhost:3000${autor.foto}`}
              alt={autor.nome}
            />
          ) : (
            <div className="autor-cover-placeholder">
              {autor.nome}
            </div>
          )}

        </div>

        <div className="autor-detail-text">

          <span className="autor-detail-label">
            AUTOR
          </span>

          <h1>
            {autor.nome}
          </h1>

          <p className="autor-biografia">
            {autor.biografia ||
              "Biografia não informada."}
          </p>

          <div className="autor-detail-box">

            <div>
              <strong>
                Nacionalidade
              </strong>

              <span>
                {autor.nacionalidade || "--"}
              </span>
            </div>

            <div>
              <strong>
                Ano de nascimento
              </strong>

              <span>
                {autor.ano_nascimento || "--"}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
