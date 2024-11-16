/* Importado de Bibliotecas */
const express = require("express")
const { getFollows, getFollowByID, createFollow, updateFollow, deleteFollow } = require("../controllers/follow.controller")


/* Declaraciones COnstantes */
const router = express.Router()

/* Rutas */
router.get("/", getFollows)

router.get("/:followId", getFollowByID)

router.post("/", createFollow)

router.put("/:followId", updateFollow)

router.delete("/:followId", deleteFollow)

/* Exportado del módulo */
module.exports = router