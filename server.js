const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("database.db");

db.run(`
CREATE TABLE IF NOT EXISTS inscripciones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    correo TEXT,
    edad INTEGER,
    contacto TEXT,
    taller TEXT,
    mensaje TEXT
)
`);

app.post("/guardar", (req, res) => {
    const { nombre, correo, edad, contacto, taller, mensaje } = req.body;

    if (!nombre || !correo || !edad || !contacto || !taller) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    const query = `
    INSERT INTO inscripciones (nombre, correo, edad, contacto, taller, mensaje)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [nombre, correo, edad, contacto, taller, mensaje], function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al guardar" });
        }

        res.json({ mensaje: "Datos guardados correctamente" });
    });
});

app.get("/inscripciones", (req, res) => {
    db.all("SELECT * FROM inscripciones", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener datos" });
        }
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});