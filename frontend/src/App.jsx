import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Livros from "./pages/Livros.jsx";
import DetalhesLivro from "./pages/DetalhesLivro.jsx";
import NovoLivro from "./pages/NovoLivro.jsx";
import EditarLivro from "./pages/EditarLivro.jsx";
import Autores from "./pages/Autores.jsx";
import Perfil from "./pages/Perfil.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login e cadastro */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Área principal */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Livros */}
        <Route path="/livros" element={<Livros />} />
        <Route path="/livros/:id" element={<DetalhesLivro />} />
        <Route path="/livros/novo" element={<NovoLivro />} />
        <Route path="/livros/:id/editar" element={<EditarLivro />} />

        {/* Autores */}
        <Route path="/autores" element={<Autores />} />

        {/* Perfil */}
        <Route path="/perfil" element={<Perfil />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;