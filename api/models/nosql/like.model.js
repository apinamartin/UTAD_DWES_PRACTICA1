/* Importado de bibliotecas */
const mongoose = require("mongoose")

const LikesScheme = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true
        },
        postId: {
            type: Number,
            required: true
        },
        likeId: {
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
module.exports = mongoose.model("likes", LikesScheme) // Nombre de la colección (o de la tabla en SQL)