
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>Bookly</h2>
      </div>

      <nav className="sidebar-nav">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/livros">
          Livros
        </Link>

        <Link to="/autores">
          Autores
        </Link>

        <Link to="/perfil">
          Perfil
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;
