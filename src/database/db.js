import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "sistema_Mascotas",
  "mascotas_user",
  "Sistem2025",
  {
    host: "localhost",
    port: 5433,
    dialect: "postgres",
    logging: false,
  },
);
//probamos la conexion a la base de datos
try {
  await sequelize.authenticate();
  console.log("Conectado a PostgreSQL");
} catch (error) {
  console.error("Error de conexión:", error);
}
