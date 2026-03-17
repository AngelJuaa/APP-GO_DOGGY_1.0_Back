import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Tipo_Servicio = sequelize.define("Tipo_Servicio", {
  id_tipo_servicio: { type: DataTypes.INTEGER, primaryKey: true },
  nombre: { type: DataTypes.STRING(100) },
});
