import Dueno from "../database/models/Dueno.js";

// ❌ quitar bcrypt
// import bcrypt from "bcrypt";

export const getDuenos = async (req, res) => {
  const duenos = await Dueno.findAll();
  res.json(duenos);
};

export const createDueno = async (req, res) => {
  try {
    // ✅ guardar contraseña en texto plano
    const nuevo = await Dueno.create(req.body);

    res.json(nuevo);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getDueno = async (req, res) => {
  const dueno = await Dueno.findByPk(req.params.id);
  res.json(dueno);
};

export const updateDueno = async (req, res) => {
  await Dueno.update(req.body, {
    where: { id_dueno: req.params.id },
  });

  res.json({ mensaje: "Actualizado" });
};

export const deleteDueno = async (req, res) => {
  await Dueno.destroy({
    where: { id_dueno: req.params.id },
  });

  res.json({ mensaje: "Eliminado" });
};
