
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
import NovoAutor from "./pages/NovoAutor";
import DetalheAutor from "./pages/DetalheAutor";
import EditarAutor from "./pages/EditarAutor";
import Usuarios from "./pages/Usuarios";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Páginas públicas */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />


        {/* Páginas protegidas */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

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

        <Route
          path="/autores"
          element={
            <ProtectedRoute>
              <Autores />
            </ProtectedRoute>
          }
        />

        <Route
          path="/autores/novo"
          element={
            <ProtectedRoute>
              <NovoAutor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/autores/:id"
          element={
            <ProtectedRoute>
              <DetalheAutor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/autores/:id/editar"
          element={
            <ProtectedRoute>
              <EditarAutor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />

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

