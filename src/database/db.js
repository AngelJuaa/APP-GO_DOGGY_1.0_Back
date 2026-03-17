import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "sistema_Mascotas",
  "mascotas_user",
  "postgresql",
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false,
  },
);
