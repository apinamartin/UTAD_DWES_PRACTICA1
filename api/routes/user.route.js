/* Importado de Bibliotecas */
const express = require("express")
const { getUsers, getUserByID, createUser, updateUser, deleteUser } = require("../controllers/user.controller")


/* Declaraciones COnstantes */
const router = express.Router()

/* Rutas */
router.get("/", getUsers)

router.get("/:userId", getUserByID)

router.post("/", createUser)

router.put("/:userId", updateUser)

router.delete("/:userId", deleteUser)

/* Exportado del módulo */
module.exports = router