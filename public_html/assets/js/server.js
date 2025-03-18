const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/save-to-file", (req, res) => {
    const { name, email, message } = req.body;

    const content = `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}\n---------------------\n`;

    fs.appendFile("mensajes.txt", content, (err) => {
        if (err) {
            console.error("Error al guardar el archivo", err);
            return res.status(500).json({ message: "Error al guardar el mensaje" });
        }
        res.json({ message: "Mensaje guardado correctamente" });
    });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));