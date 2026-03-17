import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Seguimiento_GPS = sequelize.define("Seguimiento_GPS", {
  id_sgps: { type: DataTypes.INTEGER, primaryKey: true },
  latitud: { type: DataTypes.DECIMAL(10, 8) },
  longitud: { type: DataTypes.DECIMAL(11, 8) },
  tiempo_estimado: { type: DataTypes.TIME },
  ruta: { type: DataTypes.TEXT },
});
