import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Seguimiento_GPS = sequelize.define(
  "Seguimiento_GPS",
  {
    id_sgps: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    tiempo_estimado: DataTypes.TIME,
    ruta: DataTypes.TEXT,
  },
  {
    tableName: "seguimiento_gps",
    timestamps: false,
  },
);

export default Seguimiento_GPS;
