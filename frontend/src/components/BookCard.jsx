
function BookCard({ titulo, autor, imagem }) {
  return (
    <div className="book-card">

      <div className="book-card-capa">
        {imagem ? (
          <img src={imagem} alt={`Capa do livro ${titulo}`} />
        ) : (
          <span>Sem capa</span>
        )}
      </div>

      <div className="book-card-info">

        <h3>{titulo}</h3>

        <p>{autor}</p>

        <button className="book-card-btn">
          Ver detalhes
        </button>

      </div>

    </div>
  );
}

export default BookCard;

