const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a MongoDB
mongoose.connect('mongodb+srv://dani12steeven:987654321@senadani.zu478qo.mongodb.net/FitLab', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("✅ Conectado a MongoDB");
});

db.on('error', (e) => {
    console.error("❌ Error de conexión a MongoDB:", e);
});

// Esquema de la colección
const ImagenesSchema = new mongoose.Schema({
    Nombre: String,
    endpoint: String,
    precio: String,
    descripcion: String,
    tallas: String,
    disponible: Boolean
});

// Modelo
const Paginas = mongoose.model('Imagenes2', ImagenesSchema);

// Ruta para obtener datos
app.get('/obtener', async (req, res) => {
    try {
        const datos = await Paginas.find({});
        res.json(datos);
        console.log("📦 Datos enviados:", datos);
    } catch (err) {
        console.error("❌ Error en /obtener:", err);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

// Inicio del servidor
app.listen(5000, () => {
    console.log("🚀 Servidor escuchando en el puerto 5000");
});
