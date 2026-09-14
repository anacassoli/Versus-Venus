import {
  BookOpen,
  House,
  Tags,
  Users,
  User,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <BookOpen size={25} />
      </div>

      <nav>
        <a>
          <House size={18} />
          <span>Início</span>
        </a>

        <a>
          <BookOpen size={18} />
          <span>Livros</span>
        </a>

        <a>
          <Tags size={18} />
          <span>Autores</span>
        </a>

        <a>
          <Users size={18} />
          <span>Usuários</span>
        </a>

        <a>
          <User size={18} />
          <span>Meu Perfil</span>
        </a>
      </nav>

      <div className="logout">
        <LogOut size={18} />
      </div>

    </aside>
  );
}