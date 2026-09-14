
import express from "express";
import pool from "../config/database.js";

const router = express.Router();

// BUSCAR TODOS OS GÊNEROS
router.get("/", async (req, res) => {
  try {
    const resultado = await pool.query(
      "SELECT id, nome FROM generos ORDER BY nome"
    );

    res.json(resultado.rows);
  } catch (error) {
    console.error("Erro ao buscar gêneros:", error);
    res.status(500).json({
      erro: "Erro ao buscar gêneros"
    });
  }
});

export default router;
