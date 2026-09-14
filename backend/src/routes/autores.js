
import express from "express";
import multer from "multer";
import path from "path";
import pool from "../config/database.js";

const router = express.Router();

// Configuração para salvar as fotos
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const nomeArquivo =
      Date.now() + path.extname(file.originalname);

    cb(null, nomeArquivo);
  },
});

const upload = multer({ storage });

// BUSCAR TODOS OS AUTORES
router.get("/", async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
        id,
        nome,
        nacionalidade,
        ano_nascimento,
        biografia,
        foto
      FROM autores
      ORDER BY nome
    `);

    res.json(resultado.rows);
  } catch (error) {
    console.error("Erro ao buscar autores:", error);

    res.status(500).json({
      erro: "Erro ao buscar autores",
    });
  }
});

// BUSCAR UM AUTOR
router.get("/:id", async (req, res) => {
  try {
    const resultado = await pool.query(
      `
      SELECT
        id,
        nome,
        nacionalidade,
        ano_nascimento,
        biografia,
        foto
      FROM autores
      WHERE id = $1
      `,
      [req.params.id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: "Autor não encontrado",
      });
    }

    res.json(resultado.rows[0]);
  } catch (error) {
    console.error("Erro ao buscar autor:", error);

    res.status(500).json({
      erro: "Erro ao buscar autor",
    });
  }
});

// CADASTRAR AUTOR
router.post("/", upload.single("foto"), async (req, res) => {
  try {
    const {
      nome,
      nacionalidade,
      ano_nascimento,
      biografia,
    } = req.body;

    let foto = null;

    if (req.file) {
      foto = `/uploads/${req.file.filename}`;
    }

    const resultado = await pool.query(
      `
      INSERT INTO autores
      (
        nome,
        nacionalidade,
        ano_nascimento,
        biografia,
        foto
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [
        nome,
        nacionalidade,
        ano_nascimento || null,
        biografia || null,
        foto,
      ]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error("Erro ao cadastrar autor:", error);

    res.status(500).json({
      erro: "Erro ao cadastrar autor",
    });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const {
      nome,
      nacionalidade,
      ano_nascimento,
      biografia,
    } = req.body;

    const resultado = await pool.query(
      `
      UPDATE autores
      SET
        nome = $1,
        nacionalidade = $2,
        ano_nascimento = $3,
        biografia = $4
      WHERE id = $5
      RETURNING *
      `,
      [
        nome,
        nacionalidade,
        ano_nascimento || null,
        biografia || null,
        req.params.id,
      ]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: "Autor não encontrado",
      });
    }

    res.json(resultado.rows[0]);

  } catch (error) {
    console.error("Erro ao atualizar autor:", error);

    res.status(500).json({
      erro: "Erro ao atualizar autor",
    });
  }
});



// EXCLUIR AUTOR
router.delete("/:id", async (req, res) => {
  try {
    const resultado = await pool.query(
      "DELETE FROM autores WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: "Autor não encontrado",
      });
    }

    res.json({
      mensagem: "Autor excluído com sucesso",
    });
  } catch (error) {
    console.error("Erro ao excluir autor:", error);

    res.status(500).json({
      erro: "Erro ao excluir autor",
    });
  }
});


/* EXCLUIR USUÁRIO */

router.delete("/:id", async (req, res) => {
  try {
    const resultado = await pool.query(
      "DELETE FROM usuarios WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: "Usuário não encontrado"
      });
    }

    res.json({
      mensagem: "Usuário excluído com sucesso"
    });

  } catch (error) {
    console.error("Erro ao excluir usuário:", error);

    res.status(500).json({
      erro: "Erro ao excluir usuário"
    });
  }
});


export default router;

