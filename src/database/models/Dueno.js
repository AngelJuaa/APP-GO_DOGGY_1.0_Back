import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Dueno = sequelize.define(
  "Dueno",
  {
    id_dueno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    id_rol: DataTypes.INTEGER,
    id_direccion: DataTypes.INTEGER,
  },
  {
    tableName: "dueno",
    timestamps: false,
  },
);

export default Dueno;
