import Dueno from "../database/models/Dueno.js";
import Prestador_Servicio from "../database/models/Prestador_Servicio.js";
import Rol from "../database/models/Rol.js";
import Direccion from "../database/models/Direccion.js";

export const login = async (req, res) => {
  const { email, contrasena, rol } = req.body;

  try {
    let user;

    if (rol == 1) {
      user = await Dueno.findOne({ where: { email } });
    }

    if (rol == 2) {
      user = await Prestador_Servicio.findOne({ where: { email } });
    }

    if (!user) {
      return res.json({ message: "Usuario no encontrado" });
    }

    if (contrasena !== user.contrasena) {
      return res.json({ message: "Contraseña incorrecta" });
    }

    res.json({
      message: "Login correcto",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error servidor",
      error: error.message,
    });
  }
};

export const register = async (req, res) => {
  console.log("register ejecutando");
  const { nombre, email, contrasena, telefono, rol, direccion } = req.body;

  try {
    let nuevaDireccion = await Direccion.findOne({
      where: {
        calle: direccion?.calle || null,
        colonia: direccion?.colonia || null,
        estado: direccion?.estado || null,
      },
    });

    if (!nuevaDireccion) {
      nuevaDireccion = await Direccion.create({
        calle: direccion?.calle || null,
        colonia: direccion?.colonia || null,
        estado: direccion?.estado || null,
      });
    }

    const rolDB = await Rol.findOne({
      where: { id_rol: rol },
    });

    if (!rolDB) {
      return res.json({ message: "Rol no existe" });
    }

    if (rol == 1) {
      console.log("DATOS DUENO:");
      console.log("nombre:", nombre);
      console.log("email:", email);
      console.log("contrasena:", contrasena);
      console.log("telefono:", telefono);
      console.log("direccion:", nuevaDireccion);
      console.log("rolDB:", rolDB);

      const nuevo = await Dueno.create({
        nombre,
        email,
        contrasena,
        telefono,
        id_direccion: nuevaDireccion.id_direccion,
        id_rol: rolDB.id_rol,
      });

      return res.json(nuevo);
    }

    if (rol == 2) {
      const nuevo = await Prestador_Servicio.create({
        nombre,
        email,
        contrasena,
        telefono,
        id_direccion: nuevaDireccion.id_direccion,
        id_rol: rolDB.id_rol,
        biografia: null,
        foto: null,
        tarifa_base: 0,
        zona_operacion: null,
      });

      return res.json(nuevo);
    }

    res.json({ message: "Rol inválido" });
  } catch (error) {
    res.status(500).json({
      message: "Error servidor",
      error: error.message,
    });
  }
};
