
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  Bell,
  ArrowLeft,
  Save
} from "lucide-react";
import "../index.css";

export default function EditarLivro() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [autorId, setAutorId] = useState("");
  const [generoId, setGeneroId] = useState("");
  const [anoPublicacao, setAnoPublicacao] = useState("");
  const [editora, setEditora] = useState("");
  const [descricao, setDescricao] = useState("");

  const [autores, setAutores] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    buscarLivro();
    buscarAutores();
    buscarGeneros();
  }, []);

  async function buscarLivro() {
    try {
      const resposta = await fetch(
        `http://localhost:3000/livros/${id}`
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar livro");
      }

      const livro = await resposta.json();

      setTitulo(livro.titulo || "");
      setAutorId(livro.autor_id || "");
      setGeneroId(livro.genero_id || "");
      setAnoPublicacao(
        livro.ano_publicacao || ""
      );
      setEditora(livro.editora || "");
      setDescricao(livro.descricao || "");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function buscarAutores() {
    try {
      const resposta = await fetch(
        "http://localhost:3000/autores"
      );

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

      const dados = await resposta.json();

      setGeneros(dados);

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function salvarAlteracoes(event) {
    event.preventDefault();

    try {
      const resposta = await fetch(
        `http://localhost:3000/livros/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            titulo,

            autor_id: Number(autorId),

            genero_id: generoId
              ? Number(generoId)
              : null,

            ano_publicacao: anoPublicacao
              ? Number(anoPublicacao)
              : null,

            editora,

            descricao
          })
        }
      );

      if (!resposta.ok) {
        throw new Error(
          "Erro ao editar livro"
        );
      }

      navigate(`/livros/${id}`);

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <h2>Editar livro</h2>

          <div className="top-icons">

            <Bell size={18} />

            <div className="avatar">
              A
            </div>

          </div>

        </header>

        <section className="page-content">

          <button
            className="detail-back"
            onClick={() =>
              navigate(`/livros/${id}`)
            }
          >
            <ArrowLeft size={16} />
            Voltar para o livro
          </button>

          <div className="edit-page-header">

            <div>
              <span className="detail-label">
                BIBLIOTECA
              </span>

              <h1>
                Editar livro
              </h1>

              <p>
                Atualize as informações do livro
                cadastrado.
              </p>
            </div>

          </div>

          <form
            className="edit-book-card"
            onSubmit={salvarAlteracoes}
          >

            <div className="edit-form-section">

              <div className="edit-section-title">
                <h2>
                  Informações do livro
                </h2>

                <p>
                  Preencha os dados abaixo.
                </p>
              </div>

              <label>
                Título
              </label>

              <input
                type="text"
                value={titulo}
                onChange={(e) =>
                  setTitulo(e.target.value)
                }
                placeholder="Digite o título do livro"
                required
              />

              <div className="edit-form-row">

                <div className="edit-form-field">

                  <label>
                    Autor
                  </label>

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

                </div>

                <div className="edit-form-field">

                  <label>
                    Gênero
                  </label>

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

                </div>

              </div>

              <div className="edit-form-row">

                <div className="edit-form-field">

                  <label>
                    Ano de publicação
                  </label>

                  <input
                    type="number"
                    value={anoPublicacao}
                    onChange={(e) =>
                      setAnoPublicacao(
                        e.target.value
                      )
                    }
                    placeholder="Ex.: 2024"
                  />

                </div>

                <div className="edit-form-field">

                  <label>
                    Editora
                  </label>

                  <input
                    type="text"
                    value={editora}
                    onChange={(e) =>
                      setEditora(e.target.value)
                    }
                    placeholder="Nome da editora"
                  />

                </div>

              </div>

              <label>
                Descrição
              </label>

              <textarea
                value={descricao}
                onChange={(e) =>
                  setDescricao(e.target.value)
                }
                placeholder="Digite uma descrição para o livro..."
              />

            </div>

            <div className="edit-form-footer">

              <button
                type="button"
                className="edit-cancel"
                onClick={() =>
                  navigate(`/livros/${id}`)
                }
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="edit-save"
              >
                <Save size={15} />
                Salvar alterações
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>
  );
}
