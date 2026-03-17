import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Rol = sequelize.define("Rol", {
  id_rol: { type: DataTypes.INTEGER, primaryKey: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false },
});
