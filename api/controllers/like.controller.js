/* Instrucciones de Preprocesado */
const { likeModel } = require('../models')

/* Codificación de Funciones */
const getLikes = async (req, res) => {
    try {
        const data = await likeModel.find({});
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo likes", details: error.message });
    }
};

const getLikeByID = async (req, res) => {
    try {
        const { likeId } = req.params;
        const data = await likeModel.findOne({ likeId: likeId });
        if (!data) {
            return res.status(404).send({ error: "Like no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo like por ID", details: error.message });
    }
};

const createLike = async (req, res) => {
    try {
        const { body } = req;
        const data = await likeModel.create(body);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error creando like", details: error.message });
    }
};

const updateLike = async (req, res) => {
    try {
        const { likeId } = req.params;
        const { body } = req;
        const data = await likeModel.findOneAndUpdate({ likeId: likeId }, body, { new: true });
        if (!data) {
            return res.status(404).send({ error: "Like no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error updating like", details: error.message });
    }
};

const deleteLike = async (req, res) => {
    try {
        const { likeId } = req.params;
        const data = await likeModel.findOneAndDelete({ likeId: likeId });
        if (!data) {
            return res.status(404).send({ error: "Like no encontrado" });
        }
        res.send({ message: "Like eliminado correctamente", data });
    } catch (error) {
        res.status(500).send({ error: "Error eliminando like", details: error.message });
    }
};

/* Exportado de Módulo */
module.exports = {
    getLikes,
    getLikeByID,
    createLike,
    updateLike,
    deleteLike
}