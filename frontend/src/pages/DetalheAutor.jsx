
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
      <div className="book-detail">
        <p>Carregando autor...</p>
      </div>
    );
  }

  return (
    <div className="book-detail">

      <button
        className="back"
        onClick={() => navigate("/autores")}
      >
        ← voltar
      </button>

      <div className="detail-content">

        <div className="detail-cover">

          {autor.foto ? (

            <img
              src={`http://localhost:3000${autor.foto}`}
              alt={autor.nome}
            />

          ) : (

            <div className="cover-placeholder">
              {autor.nome}
            </div>

          )}

        </div>

        <div className="detail-text">

          <h1>{autor.nome}</h1>

          <p>
            {autor.biografia ||
              "Biografia não informada."}
          </p>

          <div className="detail-box">

            <p>
              <strong>Nacionalidade</strong>
              {autor.nacionalidade || "--"}
            </p>

            <p>
              <strong>Ano de nascimento</strong>
              {autor.ano_nascimento || "--"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
