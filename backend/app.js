
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import autoresRoutes from "./src/routes/autores.js";
import livrosRoutes from "./src/routes/livros.js";
import generosRoutes from "./src/routes/generos.js";
import usuariosRoutes from "./src/routes/usuarios.js";
import dashboardRoutes from "./src/routes/dashboard.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));


/* =========================
   ROTA PRINCIPAL
========================= */

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Verso & Vênus funcionando!"
  });
});


/* =========================
   ROTAS
========================= */

app.use("/autores", autoresRoutes);
app.use("/livros", livrosRoutes);
app.use("/generos", generosRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/dashboard", dashboardRoutes);


/* =========================
   SERVIDOR
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
