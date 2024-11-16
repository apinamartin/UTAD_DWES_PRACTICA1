/* Importado de Bibliotecas */
const express = require("express")
const { getFeed } = require("../controllers/feed.controller")


/* Declaraciones COnstantes */
const router = express.Router()

/* Rutas */
router.get("/:userId", getFeed)

/* Exportado del módulo */
module.exports = router