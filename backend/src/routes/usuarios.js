
import express from "express";
import pool from "../config/database.js";

const router = express.Router();

/* CADASTRAR USUÁRIO */

router.post("/", async (req, res) => {
  try {
    const {
      nome,
      email,
      senha
    } = req.body;

    const usuarioExistente = await pool.query(
      "SELECT id FROM usuarios WHERE email = $1",
      [email]
    );

    if (usuarioExistente.rows.length > 0) {
      return res.status(400).json({
        erro: "Este e-mail já está cadastrado."
      });
    }

    const resultado = await pool.query(
      `
      INSERT INTO usuarios
      (
        nome,
        email,
        senha
      )
      VALUES ($1, $2, $3)
      RETURNING id, nome, email
      `,
      [
        nome,
        email,
        senha
      ]
    );

    res.status(201).json(resultado.rows[0]);

  } catch (error) {

    console.error("Erro ao cadastrar usuário:", error);

    res.status(500).json({
      erro: "Erro ao cadastrar usuário"
    });

  }
});


/* LOGIN */

router.post("/login", async (req, res) => {
  try {

    const {
      email,
      senha
    } = req.body;

    const resultado = await pool.query(
      `
      SELECT
        id,
        nome,
        email
      FROM usuarios
      WHERE email = $1
      AND senha = $2
      `,
      [
        email,
        senha
      ]
    );

    if (resultado.rows.length === 0) {
      return res.status(401).json({
        erro: "E-mail ou senha incorretos."
      });
    }

    res.json(resultado.rows[0]);

  } catch (error) {

    console.error("Erro no login:", error);

    res.status(500).json({
      erro: "Erro ao realizar login"
    });

  }
});


/* LISTAR USUÁRIOS */

router.get("/", async (req, res) => {
  try {
    const resultado = await pool.query(
      `
      SELECT
        id,
        nome,
        email,
        data_cadastro
      FROM usuarios
      ORDER BY nome
      `
    );

    res.json(resultado.rows);

  } catch (error) {
    console.error("Erro ao buscar usuários:", error);

    res.status(500).json({
      erro: "Erro ao buscar usuários"
    });
  }
});


export default router;
