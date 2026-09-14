
import express from "express";
import pool from "../config/database.js";
import multer from "multer";
import path from "path";


const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const nomeArquivo =
      Date.now() + path.extname(file.originalname);

    cb(null, nomeArquivo);
  },
});

const upload = multer({ storage });




/* =========================
   LISTAR LIVROS
========================= */

router.get("/", async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
        livros.id,
        livros.titulo,
        livros.autor_id,
        autores.nome AS autor,
        livros.genero_id,
        generos.nome AS genero,
        livros.ano_publicacao,
        livros.editora,
        livros.descricao,
        livros.capa
      FROM livros

      INNER JOIN autores
        ON livros.autor_id = autores.id

      LEFT JOIN generos
        ON livros.genero_id = generos.id

      ORDER BY livros.titulo
    `);

    res.json(resultado.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensagem: "Erro ao buscar livros"
    });
  }
});


/* =========================
   BUSCAR LIVRO POR ID
========================= */

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      `
      SELECT
        livros.id,
        livros.titulo,
        livros.autor_id,
        autores.nome AS autor,
        livros.genero_id,
        generos.nome AS genero,
        livros.ano_publicacao,
        livros.editora,
        livros.descricao,
        livros.capa
      FROM livros

      INNER JOIN autores
        ON livros.autor_id = autores.id

      LEFT JOIN generos
        ON livros.genero_id = generos.id

      WHERE livros.id = $1
      `,
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        mensagem: "Livro não encontrado"
      });
    }

    res.json(resultado.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensagem: "Erro ao buscar livro"
    });
  }
});


/* =========================
   CADASTRAR LIVRO
========================= */


router.post("/", upload.single("capa"), async (req, res) => {
  try {

    const {
      titulo,
      autor_id,
      genero_id,
      ano_publicacao,
      editora,
      descricao
    } = req.body;

    let capa = null;

    if (req.file) {
      capa = `/uploads/${req.file.filename}`;
    }

    const resultado = await pool.query(
      `
      INSERT INTO livros
      (
        titulo,
        autor_id,
        genero_id,
        ano_publicacao,
        editora,
        descricao,
        capa
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
      `,
      [
        titulo,
        autor_id,
        genero_id || null,
        ano_publicacao || null,
        editora || null,
        descricao || null,
        capa
      ]
    );

    res.status(201).json(resultado.rows[0]);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      mensagem: "Erro ao cadastrar livro"
    });

  }
});



/* =========================
   ATUALIZAR LIVRO
========================= */

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      titulo,
      autor_id,
      genero_id,
      ano_publicacao,
      editora,
      descricao,
      capa
    } = req.body;

    const resultado = await pool.query(
      `
      UPDATE livros
      SET
        titulo = $1,
        autor_id = $2,
        genero_id = $3,
        ano_publicacao = $4,
        editora = $5,
        descricao = $6,
        capa = $7

      WHERE id = $8

      RETURNING *
      `,
      [
        titulo,
        autor_id,
        genero_id || null,
        ano_publicacao || null,
        editora || null,
        descricao || null,
        capa || null,
        id
      ]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        mensagem: "Livro não encontrado"
      });
    }

    res.json(resultado.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensagem: "Erro ao atualizar livro"
    });
  }
});


/* =========================
   EXCLUIR LIVRO
========================= */

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      "DELETE FROM livros WHERE id = $1 RETURNING *",
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        mensagem: "Livro não encontrado"
      });
    }

    res.json({
      mensagem: "Livro excluído com sucesso"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensagem: "Erro ao excluir livro"
    });
  }
});


export default router;
