/* Instrucciones de Preprocesado */
const { followModel } = require('../models')
const { postModel } = require('../models')

/* Codificación de Funciones */
const getFeed = async (req, res) => {
    try {
        const userId = req.params.userId;

        const follows = await followModel.find({ followerId: userId }).select("followingId");
        console.log(follows)
        const followingIds = follows.map((follow) => follow.followingId);

        const posts = await postModel.find({ userId: { $in: followingIds } })
        .sort({ createdAt: -1 }); // Ordenar por fecha descendente.

        res.send(posts);
    } catch (error) {
        console.error("Error obteniendo el feed:", error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};

/* Exportado de Módulo */
module.exports = {
    getFeed
}