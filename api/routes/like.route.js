/* Importado de Bibliotecas */
const express = require("express")
const { getLikes, getLikeByID, createLike, updateLike, deleteLike } = require("../controllers/like.controller")


/* Declaraciones COnstantes */
const router = express.Router()

/* Rutas */
router.get("/", getLikes)

router.get("/:likeId", getLikeByID)

router.post("/", createLike)

router.put("/:likeId", updateLike)

router.delete("/:likeId", deleteLike)

/* Exportado del módulo */
module.exports = router