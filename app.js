/* Importado de Bibliotecas */
const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongooseDBConnect = require("./api/config/mongodb.config")

/* Declaramos constantes */
const app = express()

/* Middlewares */
// Le indicamos a la app de express que use cors para evitar errores de Cross-Domain (XD)
app.use(cors())
app.use(express.json())
app.use("/api", require("./api/routes/index"))

/* Ejecución de la app de Express */
const API_PORT = process.env.API_PORT || 3000
app.listen(API_PORT, () => {
    console.log(`Server listening on port: ${API_PORT}`)
    console.log(`Attempting to connect to MongoDB...`)
    mongooseDBConnect()
})