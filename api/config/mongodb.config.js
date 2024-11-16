/* Importado de Bibliotecas */
const mongoose = require("mongoose")
const DB_URI = process.env.DB_URI

/* Codificación de Funciones */

const connectToMongoDB = () => {
    // Inicializamos la conexión
    console.log("[MongoDB Controller] Inicializando la conexión con la base de datos...");
    mongoose.set("strictQuery", false);
    console.log(DB_URI)
    try{
        mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log("[MongoDB Controller] Conexión con la base de datos inicializada con éxito.");
    }
    catch(err){
        console.log("[MongoDB Controller] No se ha podido establecer conexión con la base de datos, error:\n" + err);
    }
}

/* Exportado de Módulo */
module.exports = connectToMongoDB