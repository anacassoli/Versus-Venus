
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

export default function EditarAutor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [anoNascimento, setAnoNascimento] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [biografia, setBiografia] = useState("");

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

      const autor = await resposta.json();

      setNome(autor.nome || "");
      setAnoNascimento(autor.ano_nascimento || "");
      setNacionalidade(autor.nacionalidade || "");
      setBiografia(autor.biografia || "");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function atualizarAutor(event) {
    event.preventDefault();

    try {
      const resposta = await fetch(
        `http://localhost:3000/autores/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            ano_nascimento: anoNascimento
              ? Number(anoNascimento)
              : null,
            nacionalidade,
            biografia,
          }),
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao atualizar autor");
      }

      navigate("/autores");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="new-book-page">

      <button
        className="back"
        onClick={() => navigate("/autores")}
      >
        ← voltar
      </button>

      <h1>Editar autor</h1>

      <div className="new-book-content">

        <div className="upload-box">

          <div className="upload-icon">
            👤
          </div>

          <p>
            Alterar foto
          </p>

          <input
            type="file"
            accept="image/*"
          />

        </div>

        <form
          className="book-form"
          onSubmit={atualizarAutor}
        >

          <label>
            Nome completo
          </label>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label>
            Ano de nascimento
          </label>

          <input
            type="number"
            value={anoNascimento}
            onChange={(e) =>
              setAnoNascimento(e.target.value)
            }
            required
          />

          <label>
            Nacionalidade
          </label>

          <input
            type="text"
            value={nacionalidade}
            onChange={(e) =>
              setNacionalidade(e.target.value)
            }
            required
          />

          <label>
            Biografia
          </label>

          <textarea
            value={biografia}
            onChange={(e) =>
              setBiografia(e.target.value)
            }
            rows="5"
            placeholder="Digite uma biografia"
          />

          <div className="form-buttons">

            <button
              type="button"
              className="cancel"
              onClick={() => navigate("/autores")}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="save"
            >
              Salvar alterações
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}
