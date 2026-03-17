import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Dueno = sequelize.define("Dueno", {
  id_dueno: { type: DataTypes.INTEGER, primaryKey: true },
  nombre: { type: DataTypes.STRING(100) },
  contrasena: { type: DataTypes.STRING(255) },
  telefono: { type: DataTypes.STRING(20) },
  email: { type: DataTypes.STRING(100) },
  id_rol: { type: DataTypes.INTEGER },
  id_direccion: { type: DataTypes.INTEGER },
});
