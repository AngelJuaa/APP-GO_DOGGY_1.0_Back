import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Direccion = sequelize.define(
  "Direccion",
  {
    id_direccion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    calle: DataTypes.STRING,
    colonia: DataTypes.STRING,
    estado: DataTypes.STRING,
  },
  {
    tableName: "direccion",
    timestamps: false,
  },
);

export default Direccion;
