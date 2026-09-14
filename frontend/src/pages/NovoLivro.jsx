import "../index.css";

export default function NovoLivro() {
  return (
    <div className="new-book-page">

      <button className="back">← voltar</button>

      <h1>Adicionar um novo livro</h1>

      <div className="new-book-content">

        <div className="upload-box">
          <div className="upload-icon">☁</div>
          <p>Adicionar capa</p>
        </div>

        <form className="book-form">

          <label>Título</label>
          <input placeholder="Digite o título do livro" />

          <label>Autor</label>
          <input placeholder="Digite o autor" />

          <label>Gênero</label>
          <input placeholder="Digite o gênero" />

          <label>Ano de publicação</label>
          <input placeholder="Ex: 2000" />

          <label>Editora</label>
          <input placeholder="Digite a editora" />

          <label>Descrição</label>
          <textarea placeholder="Fale sobre o livro..."></textarea>

          <div className="form-buttons">
            <button type="button" className="cancel">
              Cancelar
            </button>

            <button type="submit" className="save">
              Salvar
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}