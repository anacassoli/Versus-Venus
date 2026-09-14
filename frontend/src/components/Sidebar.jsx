
import { useNavigate } from "react-router-dom";

import {
  BookOpen,
  House,
  Tags,
  Users,
  User,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <BookOpen size={25} />
      </div>

      <nav>

        <a onClick={() => navigate("/dashboard")}>
          <House size={18} />
          <span>Início</span>
        </a>

        <a onClick={() => navigate("/livros")}>
          <BookOpen size={18} />
          <span>Livros</span>
        </a>

        <a onClick={() => navigate("/autores")}>
          <Tags size={18} />
          <span>Autores</span>
        </a>

        <a>
          <Users size={18} />
          <span>Usuários</span>
        </a>

        <a onClick={() => navigate("/perfil")}>
          <User size={18} />
          <span>Meu Perfil</span>
        </a>

      </nav>

      <div className="logout" onClick={sair}>
        <LogOut size={18} />
      </div>

    </aside>
  );
}
