import { DataTypes } from "sequelize";
import { sequelize } from "../../src/database/db.js";

export const Servicio = sequelize.define("Servicio", {
  id_servicio: { type: DataTypes.INTEGER, primaryKey: true },
  costo_total: { type: DataTypes.DECIMAL(10, 2) },
  duracion_min: { type: DataTypes.INTEGER },
  hr_inicio: { type: DataTypes.TIME },
  hr_fin: { type: DataTypes.TIME },
  hr_solicitado: { type: DataTypes.DATE },
  notas_paseador: { type: DataTypes.TEXT },
  notas_dueno: { type: DataTypes.TEXT },
  estado: { type: DataTypes.STRING(20) },
  id_tipo_servicio: { type: DataTypes.INTEGER },
  id_pres_servicio: { type: DataTypes.INTEGER },
  id_mascota: { type: DataTypes.INTEGER },
  id_sgps: { type: DataTypes.INTEGER },
  id_calificacion: { type: DataTypes.INTEGER },
});
