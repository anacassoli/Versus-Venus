
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

import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login e cadastro */}

        <Route path="/" element={<Login />} />

        <Route path="/cadastro" element={<Cadastro />} />


        {/* Área principal */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* Livros */}

        <Route
          path="/livros"
          element={
            <ProtectedRoute>
              <Livros />
            </ProtectedRoute>
          }
        />

        <Route
          path="/livros/:id"
          element={
            <ProtectedRoute>
              <DetalhesLivro />
            </ProtectedRoute>
          }
        />

        <Route
          path="/livros/novo"
          element={
            <ProtectedRoute>
              <NovoLivro />
            </ProtectedRoute>
          }
        />

        <Route
          path="/livros/:id/editar"
          element={
            <ProtectedRoute>
              <EditarLivro />
            </ProtectedRoute>
          }
        />


        {/* Autores */}

        <Route
          path="/autores"
          element={
            <ProtectedRoute>
              <Autores />
            </ProtectedRoute>
          }
        />


        {/* Perfil */}

        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <Perfil />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

