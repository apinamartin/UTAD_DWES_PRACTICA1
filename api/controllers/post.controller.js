/* Instrucciones de Preprocesado */
const { postModel } = require('../models')

/* Codificación de Funciones */
const getPosts = async (req, res) => {
    try {
        const data = await postModel.find({});
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo posts", details: error.message });
    }
};

const getPostByID = async (req, res) => {
    try {
        const { postId } = req.params;
        const data = await postModel.findOne({ postId: postId });
        if (!data) {
            return res.status(404).send({ error: "Post no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error obteniendo post por ID", details: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const { body } = req;
        const data = await postModel.create(body);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error creando post", details: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { body } = req;
        const data = await postModel.findOneAndUpdate({ postId: postId }, body, { new: true });
        if (!data) {
            return res.status(404).send({ error: "Post no encontrado" });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Error updating post", details: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const data = await postModel.findOneAndDelete({ postId: postId });
        if (!data) {
            return res.status(404).send({ error: "Post no encontrado" });
        }
        res.send({ message: "Post eliminado correctamente", data });
    } catch (error) {
        res.status(500).send({ error: "Error eliminando post", details: error.message });
    }
};

/* Exportado de Módulo */
module.exports = {
    getPosts,
    getPostByID,
    createPost,
    updatePost,
    deletePost
}