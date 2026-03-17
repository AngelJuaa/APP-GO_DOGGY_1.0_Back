import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Calificacion = sequelize.define("Calificacion", {
  id_calificacion: { type: DataTypes.INTEGER, primaryKey: true },
  comentario: { type: DataTypes.TEXT },
  fecha_calificacion: { type: DataTypes.DATE },
  calificacion_valor: { type: DataTypes.INTEGER },
});
