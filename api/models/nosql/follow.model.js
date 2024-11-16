const mongoose = require("mongoose")

const FollowersScheme = new mongoose.Schema(
    {
        followingId: {
            type: Number,
            required: true
        },
        followerId: {
            type: Number,
            required: true
        },
        followId: {
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
module.exports = mongoose.model("followers", FollowersScheme) // Nombre de la colección (o de la tabla en SQL)