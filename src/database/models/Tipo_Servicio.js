import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Tipo_Servicio = sequelize.define(
  "Tipo_Servicio",
  {
    id_tipo_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
  },
  {
    tableName: "tipo_servicio",
    timestamps: false,
  },
);

export default Tipo_Servicio;
