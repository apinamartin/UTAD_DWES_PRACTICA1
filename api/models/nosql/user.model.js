/* Importado de bibliotecas */
const mongoose = require("mongoose")

const UsersScheme = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true
        },
        fullName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        mail: {
            type: String,
            required: true
        },
        profilePic: {
            type: String
        },
        password: {
            type: String,
            required: true
        },
        userId: {
            type: Number,
            required: true,
            unique: true
        },
    },
    {
        timestamps: true, // TODO createdAt, updatedAt
        versionKey: false
    }
)

/* Exportado de Módulo */
module.exports = mongoose.model("users", UsersScheme) // Nombre de la colección (o de la tabla en SQL)