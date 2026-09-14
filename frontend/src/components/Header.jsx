
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="header-logo">
        <Link to="/home">
          Bookly
        </Link>
      </div>

      <nav className="header-nav">

        <Link to="/home">
          Início
        </Link>

        <Link to="/autores">
          Autores
        </Link>

        <Link to="/livros">
          Livros
        </Link>

        <Link to="/perfil">
          Perfil
        </Link>

      </nav>

    </header>
  );
}

export default Header;
