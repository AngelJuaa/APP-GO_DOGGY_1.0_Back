import { DataTypes } from "sequelize";
import { sequelize } from "../../src/database/db.js";

export const Prestador_Servicio = sequelize.define("Prestador_Servicio", {
  id_pres_servicio: { type: DataTypes.INTEGER, primaryKey: true },
  biografia: { type: DataTypes.TEXT },
  foto: { type: DataTypes.STRING(255) },
  contrasena: { type: DataTypes.STRING(255) },
  tarifa_base: { type: DataTypes.DECIMAL(10, 2) },
  zona_operacion: { type: DataTypes.STRING(100) },
  id_direccion: { type: DataTypes.INTEGER },
  id_rol: { type: DataTypes.INTEGER },
});
