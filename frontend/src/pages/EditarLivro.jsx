
import "../index.css";

function EditarLivro() {
  return (
    <div className="editar-livro">

      <header className="editar-livro-header">
        <h1>Editar Livro</h1>

        <button className="btn-voltar">
          Voltar
        </button>
      </header>

      <main className="editar-livro-content">

        <div className="editar-livro-card">

          <div className="campo">
            <label>Título do livro</label>
            <input
              type="text"
              defaultValue="Binding 13"
            />
          </div>

          <div className="campo">
            <label>Autor</label>
            <input
              type="text"
              defaultValue="Chloé Walsh"
            />
          </div>

          <div className="campo">
            <label>Gênero</label>
            <input
              type="text"
              defaultValue="Romance"
            />
          </div>

          <div className="campo">
            <label>Ano de publicação</label>
            <input
              type="number"
              defaultValue="2019"
            />
          </div>

          <div className="campo">
            <label>Descrição</label>
            <textarea
              defaultValue="Informações sobre o livro e sua história."
            ></textarea>
          </div>

          <button className="btn-salvar">
            Salvar alterações
          </button>

        </div>

      </main>

    </div>
  );
}

export default EditarLivro;

