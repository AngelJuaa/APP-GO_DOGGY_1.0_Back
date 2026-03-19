import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Prestador_Servicio = sequelize.define(
  "Prestador_Servicio",
  {
    id_pres_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    biografia: DataTypes.TEXT,
    foto: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    tarifa_base: DataTypes.DECIMAL,
    zona_operacion: DataTypes.STRING,
    id_direccion: DataTypes.INTEGER,
    id_rol: DataTypes.INTEGER,
  },
  {
    tableName: "prestador_servicio",
    timestamps: false,
  },
);

export default Prestador_Servicio;
