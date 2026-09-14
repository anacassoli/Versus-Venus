import "../index.css";

export default function DetalheLivro() {
  return (
    <div className="book-detail">

      <button className="back">← voltar</button>

      <div className="detail-content">

        <div className="detail-cover">
          <div className="cover-placeholder">
            A Hipótese<br />
            do Amor
          </div>
        </div>

        <div className="detail-text">

          <h1>A hipótese do amor</h1>

          <p>
            Olive Smith é uma doutoranda dedicada à ciência e não acredita
            muito no amor — principalmente depois de algumas experiências
            que fizeram com que ela desistisse de relacionamentos.
          </p>

          <p>
            O problema é que o namorado falso de Olive acaba sendo Adam
            Carlsen, um professor famoso por sua personalidade difícil.
          </p>

          <p>
            O que começa como um simples relacionamento de mentira logo
            se torna mais complicado quando Olive percebe que Adam talvez
            não seja exatamente o homem que ela imaginava.
          </p>

          <div className="detail-box">

            <p><strong>Gênero</strong> Romance</p>
            <p><strong>Ano</strong> 2022</p>
            <p><strong>Autora</strong> Ali Hazelwood</p>
            <p><strong>Editora</strong> Arqueiro</p>

          </div>

          <div className="stars">
            ☆ ☆ ☆ ☆ ☆
          </div>

        </div>

      </div>

    </div>
  );
}