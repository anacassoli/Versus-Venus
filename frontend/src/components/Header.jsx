
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <Link to="/dashboard">
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

    </header>
  );
}

export default Header;
