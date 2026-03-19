import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Servicio = sequelize.define(
  "Servicio",
  {
    id_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    costo_total: DataTypes.DECIMAL,
    duracion_min: DataTypes.INTEGER,
    hr_inicio: DataTypes.TIME,
    hr_fin: DataTypes.TIME,
    hr_solicitado: DataTypes.DATE,
    notas_paseador: DataTypes.TEXT,
    notas_dueno: DataTypes.TEXT,
    estado: DataTypes.STRING,
    id_tipo_servicio: DataTypes.INTEGER,
    id_pres_servicio: DataTypes.INTEGER,
    id_mascota: DataTypes.INTEGER,
    id_sgps: DataTypes.INTEGER,
    id_calificacion: DataTypes.INTEGER,
  },
  {
    tableName: "servicio",
    timestamps: false,
  },
);

export default Servicio;
