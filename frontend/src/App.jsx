import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Livros from "./pages/Livros";
import DetalhesLivro from "./pages/DetalhesLivro";
import NovoLivro from "./pages/NovoLivro";
import EditarLivro from "./pages/EditarLivro";
import Autores from "./pages/Autores";
import Perfil from "./pages/Perfil";

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