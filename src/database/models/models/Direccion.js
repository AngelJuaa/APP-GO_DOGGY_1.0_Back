import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Direccion = sequelize.define("Direccion", {
  id_direccion: { type: DataTypes.INTEGER, primaryKey: true },
  calle: { type: DataTypes.STRING(100) },
  colonia: { type: DataTypes.STRING(100) },
  estado: { type: DataTypes.STRING(50) },
});
