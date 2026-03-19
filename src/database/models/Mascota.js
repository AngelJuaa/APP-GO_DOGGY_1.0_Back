import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Mascota = sequelize.define(
  "Mascota",
  {
    id_mascota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING,
    num_patas: DataTypes.INTEGER,
    alergias: DataTypes.TEXT,
    esterilizado: DataTypes.BOOLEAN,
    fecha_nacimiento: DataTypes.DATE,
    color: DataTypes.STRING,
    sexo: DataTypes.STRING,
    foto: DataTypes.STRING,
    peso: DataTypes.DECIMAL,
    miedos: DataTypes.TEXT,
    notas_ad: DataTypes.TEXT,
    id_dueno: DataTypes.INTEGER,
  },
  {
    tableName: "mascota",
    timestamps: false,
  },
);

export default Mascota;
