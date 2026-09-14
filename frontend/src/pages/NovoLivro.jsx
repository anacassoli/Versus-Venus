
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function NovoLivro() {

  const navigate = useNavigate();

  const [autores, setAutores] = useState([]);
  const [generos, setGeneros] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [autorId, setAutorId] = useState("");
  const [generoId, setGeneroId] = useState("");
  const [anoPublicacao, setAnoPublicacao] = useState("");
  const [editora, setEditora] = useState("");
  const [descricao, setDescricao] = useState("");
  const [capa, setCapa] = useState(null);

  useEffect(() => {
    buscarAutores();
    buscarGeneros();
  }, []);

  async function buscarAutores() {

    try {

      const resposta = await fetch(
        "http://localhost:3000/autores"
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar autores");
      }

      const dados = await resposta.json();

      setAutores(dados);

    } catch (error) {

      console.error("Erro:", error);

    }
  }

  async function buscarGeneros() {

    try {

      const resposta = await fetch(
        "http://localhost:3000/generos"
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar gêneros");
      }

      const dados = await resposta.json();

      setGeneros(dados);

    } catch (error) {

      console.error("Erro:", error);

    }
  }

  async function salvarLivro(event) {

    event.preventDefault();

    try {

      const dados = new FormData();

      dados.append("titulo", titulo);
      dados.append("autor_id", autorId);
      dados.append("genero_id", generoId);
      dados.append("ano_publicacao", anoPublicacao);
      dados.append("editora", editora);
      dados.append("descricao", descricao);

      if (capa) {
        dados.append("capa", capa);
      }

      const resposta = await fetch(
        "http://localhost:3000/livros",
        {
          method: "POST",
          body: dados
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar livro");
      }

      navigate("/livros");

    } catch (error) {

      console.error("Erro:", error);

    }
  }

  return (
    <div className="new-book-page">

      <button
        className="back"
        onClick={() => navigate("/livros")}
      >
        ← voltar
      </button>

      <h1>Adicionar um novo livro</h1>

      <div className="new-book-content">

        <div className="upload-box">

          <div className="upload-icon">
            📖
          </div>

          <p>
            {capa ? capa.name : "Adicionar capa"}
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setCapa(e.target.files[0])
            }
          />

        </div>

        <form
          className="book-form"
          onSubmit={salvarLivro}
        >

          <label>Título</label>

          <input
            type="text"
            placeholder="Digite o título do livro"
            value={titulo}
            onChange={(e) =>
              setTitulo(e.target.value)
            }
            required
          />

          <label>Autor</label>

          <select
            value={autorId}
            onChange={(e) =>
              setAutorId(e.target.value)
            }
            required
          >

            <option value="">
              Selecione um autor
            </option>

            {autores.map((autor) => (

              <option
                key={autor.id}
                value={autor.id}
              >
                {autor.nome}
              </option>

            ))}

          </select>

          <label>Gênero</label>

          <select
            value={generoId}
            onChange={(e) =>
              setGeneroId(e.target.value)
            }
          >

            <option value="">
              Selecione um gênero
            </option>

            {generos.map((genero) => (

              <option
                key={genero.id}
                value={genero.id}
              >
                {genero.nome}
              </option>

            ))}

          </select>

          <label>Ano de publicação</label>

          <input
            type="number"
            placeholder="Ex: 2024"
            value={anoPublicacao}
            onChange={(e) =>
              setAnoPublicacao(e.target.value)
            }
          />

          <label>Editora</label>

          <input
            type="text"
            placeholder="Digite a editora"
            value={editora}
            onChange={(e) =>
              setEditora(e.target.value)
            }
          />

          <label>Descrição</label>

          <textarea
            placeholder="Digite uma descrição do livro"
            value={descricao}
            onChange={(e) =>
              setDescricao(e.target.value)
            }
            rows="5"
          />

          <div className="form-buttons">

            <button
              type="button"
              className="cancel"
              onClick={() => navigate("/livros")}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="save"
            >
              Salvar
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

