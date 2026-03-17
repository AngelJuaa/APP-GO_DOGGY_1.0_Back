import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Mascota = sequelize.define("Mascota", {
  id_mascota: { type: DataTypes.INTEGER, primaryKey: true },
  nombre: { type: DataTypes.STRING(50) },
  raza: { type: DataTypes.STRING(50) },
  num_patas: { type: DataTypes.INTEGER },
  alergias: { type: DataTypes.TEXT },
  esterilizado: { type: DataTypes.BOOLEAN },
  fecha_nacimiento: { type: DataTypes.DATE },
  color: { type: DataTypes.STRING(30) },
  sexo: { type: DataTypes.STRING(10) },
  foto: { type: DataTypes.STRING(255) },
  peso: { type: DataTypes.DECIMAL(5, 2) },
  miedos: { type: DataTypes.TEXT },
  notas_ad: { type: DataTypes.TEXT },
  id_dueno: { type: DataTypes.INTEGER },
});
