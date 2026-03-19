import express from "express";
import cors from "cors";
import { sequelize } from "./database/db.js";
// importmaos los modelos para que se sincronicen con la base de datos

//rutas de rutas
import duenoRoutes from "./routes/duenoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
//imports de relaciones entre tablas
import "./database/relations.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(duenoRoutes);

app.get("/", (req, res) => res.send("backend ok"));

const PORT = 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
});

// Más rutas según necesites (GET /usuarios, POST /mascotas, etc.)
