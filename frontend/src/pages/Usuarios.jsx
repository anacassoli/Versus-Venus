
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Bell, Search, Trash2 } from "lucide-react";
import "../index.css";

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    buscarUsuarios();
  }, []);

  async function buscarUsuarios() {
    try {
      const resposta = await fetch(
        "http://localhost:3000/usuarios"
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar usuários");
      }

      const dados = await resposta.json();

      setUsuarios(dados);

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function excluirUsuario(id) {

    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este usuário?"
    );

    if (!confirmar) return;

    try {

      const resposta = await fetch(
        `http://localhost:3000/usuarios/${id}`,
        {
          method: "DELETE"
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao excluir usuário");
      }

      buscarUsuarios();

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <h2>Usuários</h2>

          <div className="top-icons">

            <Bell size={18} />

            <div className="avatar">
              A
            </div>

          </div>

        </header>

        <section className="page-content">

          <div className="page-actions">

            <div className="search">

              <Search size={15} />

              <input
                type="text"
                placeholder="Buscar usuário..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />

            </div>

          </div>

          <div className="book-list">

            {usuariosFiltrados.length > 0 ? (

              usuariosFiltrados.map((usuario) => (

                <div
                  className="book-row"
                  key={usuario.id}
                >

                  <div className="author-photo">

                    <span>
                      {usuario.nome
                        ?.charAt(0)
                        .toUpperCase()}
                    </span>

                  </div>

                  <div className="book-info">

                    <h3>
                      {usuario.nome}
                    </h3>

                    <p>
                      {usuario.email}
                    </p>

                    <small>
                      Usuário cadastrado
                    </small>

                  </div>

                  <div className="actions">

                    <Trash2
                      size={14}
                      onClick={() => excluirUsuario(usuario.id)}
                      style={{ cursor: "pointer" }}
                    />

                  </div>

                </div>

              ))

            ) : (

              <p>
                Nenhum usuário encontrado.
              </p>

            )}

          </div>

        </section>

      </main>

    </div>
  );
}
