/* Instrucciones de Preprocesado */
const { userModel } = require('../models')

/* Codificación de Funciones */
const getUsers = async (req, res) => {
    try {
        const data = await userModel.find({});
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo users", details: error.message });
    }
};

const getUserByID = async (req, res) => {
    try {
        const { userId } = req.params;
        const data = await userModel.findOne({ userId: userId });
        if (!data) {
            return res.status(404).send({ error: "User no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo user por ID", details: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { body } = req;
        const data = await userModel.create(body);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error creando user", details: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { body } = req;
        const data = await userModel.findOneAndUpdate({ userId: userId }, body, { new: true });
        if (!data) {
            return res.status(404).send({ error: "User no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error updating user", details: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const data = await userModel.findOneAndDelete({ userId: userId });
        if (!data) {
            return res.status(404).send({ error: "User no encontrado" });
        }
        res.send({ message: "User eliminado correctamente", data });
    } catch (error) {
        res.status(500).send({ error: "Error eliminando user", details: error.message });
    }
};

/* Exportado de Módulo */
module.exports = {
    getUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}