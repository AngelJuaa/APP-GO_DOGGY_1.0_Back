import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Rol = sequelize.define(
  "Rol",
  {
    id_rol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
  },
  {
    tableName: "rol",
    timestamps: false,
  },
);

export default Rol;
