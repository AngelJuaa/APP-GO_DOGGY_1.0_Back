import express from "express";
import cors from "cors";
import { sequelize } from "./database/db.js";
// importmaos los modelos para que se sincronicen con la base de datos
import "./database/models/Tipo_Servicio.js";
import "./database/models/Servicio.js";
import "./database/models/Seguimiento_GPS.js";
import "./database/models/Dueno.js";
import "./database/models/Mascota.js";
import "./database/models/Calificacion.js";
import "./database/models/Rol.js";
import "./database/models/Direccion.js";
import "./database/models/Prestador_Servicio.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("backend ok"));

const PORT = 3000;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Ruta de login
app.post("/login", async (req, res) => {
  const { nombre, contraseña } = req.body;
  try {
    const user = await Dueno.findOne({ where: { nombre, contraseña } });
    if (user) {
      res.json({ success: true, user });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta de registro (ejemplo para Dueno)
app.post("/registro", async (req, res) => {
  const { nombre, contraseña, email, telefono, id_rol, id_direccion } =
    req.body;
  try {
    const newUser = await Dueno.create({
      nombre,
      contraseña,
      email,
      telefono,
      id_rol,
      id_direccion,
    });
    res.json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Más rutas según necesites (GET /usuarios, POST /mascotas, etc.)
