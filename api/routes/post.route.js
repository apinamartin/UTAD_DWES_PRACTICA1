/* Importado de Bibliotecas */
const express = require("express")
const { getPosts, getPostByID, createPost, updatePost, deletePost } = require("../controllers/post.controller")


/* Declaraciones COnstantes */
const router = express.Router()

/* Rutas */
router.get("/", getPosts)

router.get("/:postId", getPostByID)

router.post("/", createPost)

router.put("/:postId", updatePost)

router.delete("/:postId", deletePost)

/* Exportado del módulo */
module.exports = router