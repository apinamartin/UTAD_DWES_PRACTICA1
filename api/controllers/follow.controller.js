/* Instrucciones de Preprocesado */
const { followModel } = require('../models')

/* Codificación de Funciones */
const getFollows = async (req, res) => {
    try {
        const data = await followModel.find({});
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo follows", details: error.message });
    }
};

const getFollowByID = async (req, res) => {
    try {
        const { followId } = req.params;
        const data = await followModel.findOne({ followId: followId });
        if (!data) {
            return res.status(404).send({ error: "Follow no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo follow por ID", details: error.message });
    }
};

const createFollow = async (req, res) => {
    try {
        const { body } = req;
        const data = await followModel.create(body);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error creando follow", details: error.message });
    }
};

const updateFollow = async (req, res) => {
    try {
        const { followId } = req.params;
        const { body } = req;
        const data = await followModel.findOneAndUpdate({ followId: followId }, body, { new: true });
        if (!data) {
            return res.status(404).send({ error: "Follow no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error updating follow", details: error.message });
    }
};

const deleteFollow = async (req, res) => {
    try {
        const { followId } = req.params;
        const data = await followModel.findOneAndDelete({ followId: followId });
        if (!data) {
            return res.status(404).send({ error: "Follow no encontrado" });
        }
        res.send({ message: "Follow eliminado correctamente", data });
    } catch (error) {
        res.status(500).send({ error: "Error eliminando follow", details: error.message });
    }
};

/* Exportado de Módulo */
module.exports = {
    getFollows,
    getFollowByID,
    createFollow,
    updateFollow,
    deleteFollow
}