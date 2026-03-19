import Direccion from "./models/Direccion.js";
import Dueno from "./models/Dueno.js";
import PrestadorServicio from "./models/Prestador_Servicio.js";
import Mascota from "./models/Mascota.js";
import TipoServicio from "./models/Tipo_Servicio.js";
import Servicio from "./models/Servicio.js";
import SeguimientoGPS from "./models/Seguimiento_GPS.js";
import Calificacion from "./models/Calificacion.js";
import Rol from "./models/Rol.js";

// =========================
// Rol
// =========================

Rol.hasMany(Dueno, {
  foreignKey: "id_rol",
});

Dueno.belongsTo(Rol, {
  foreignKey: "id_rol",
});

Rol.hasMany(PrestadorServicio, {
  foreignKey: "id_rol",
});

PrestadorServicio.belongsTo(Rol, {
  foreignKey: "id_rol",
});

// =========================
// Direccion
// =========================

Direccion.hasMany(Dueno, {
  foreignKey: "id_direccion",
});

Dueno.belongsTo(Direccion, {
  foreignKey: "id_direccion",
});

Direccion.hasMany(PrestadorServicio, {
  foreignKey: "id_direccion",
});

PrestadorServicio.belongsTo(Direccion, {
  foreignKey: "id_direccion",
});

// =========================
// Dueno - Mascota
// =========================

Dueno.hasMany(Mascota, {
  foreignKey: "id_dueno",
});

Mascota.belongsTo(Dueno, {
  foreignKey: "id_dueno",
});

// =========================
// Tipo Servicio
// =========================

TipoServicio.hasMany(Servicio, {
  foreignKey: "id_tipo_servicio",
});

Servicio.belongsTo(TipoServicio, {
  foreignKey: "id_tipo_servicio",
});

// =========================
// Prestador - Servicio
// =========================

PrestadorServicio.hasMany(Servicio, {
  foreignKey: "id_pres_servicio",
});

Servicio.belongsTo(PrestadorServicio, {
  foreignKey: "id_pres_servicio",
});

// =========================
// Mascota - Servicio
// =========================

Mascota.hasMany(Servicio, {
  foreignKey: "id_mascota",
});

Servicio.belongsTo(Mascota, {
  foreignKey: "id_mascota",
});

// =========================
// GPS - Servicio (1-1)
// =========================

SeguimientoGPS.hasOne(Servicio, {
  foreignKey: "id_sgps",
});

Servicio.belongsTo(SeguimientoGPS, {
  foreignKey: "id_sgps",
});

// =========================
// Calificacion - Servicio (1-1)
// =========================

Calificacion.hasOne(Servicio, {
  foreignKey: "id_calificacion",
});

Servicio.belongsTo(Calificacion, {
  foreignKey: "id_calificacion",
});
