
import express from "express";
import pool from "../config/database.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const livros = await pool.query(
      "SELECT COUNT(*) AS total FROM livros"
    );

    const autores = await pool.query(
      "SELECT COUNT(*) AS total FROM autores"
    );

    const generos = await pool.query(
      "SELECT COUNT(*) AS total FROM generos"
    );

    const usuarios = await pool.query(
      "SELECT COUNT(*) AS total FROM usuarios"
    );

    res.json({
      livros: Number(livros.rows[0].total),
      autores: Number(autores.rows[0].total),
      generos: Number(generos.rows[0].total),
      usuarios: Number(usuarios.rows[0].total),
    });

  } catch (error) {
    console.error("Erro ao buscar dados do dashboard:", error);

    res.status(500).json({
      erro: "Erro ao buscar dados do dashboard",
    });
  }
});

export default router;
