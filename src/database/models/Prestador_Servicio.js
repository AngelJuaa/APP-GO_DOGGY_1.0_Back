import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Prestador_Servicio = sequelize.define(
  "prestador_servicio",
  {
    id_pres_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
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
