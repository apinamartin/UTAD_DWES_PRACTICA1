/* Importado de bibliotecas */
const mongoose = require("mongoose")

const PostsScheme = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        postId: {
            type: Number,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true, // TODO createdAt, updatedAt
        versionKey: false
    }
)

/* Exportado de Módulo */
module.exports = mongoose.model("posts", PostsScheme) // Nombre de la colección (o de la tabla en SQL)