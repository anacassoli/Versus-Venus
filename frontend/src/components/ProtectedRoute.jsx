
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const logado = localStorage.getItem("logado");

  if (logado !== "true") {
    return <Navigate to="/" replace />;
  }

  return children;
}
