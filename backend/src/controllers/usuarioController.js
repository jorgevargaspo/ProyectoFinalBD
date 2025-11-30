import Usuario from "../models/Usuario.js";

export const crearUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: "No encontrado" });
    res.json(usuario);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Usuario eliminado" });
  } catch {
    res.status(400).json({ error: "No se pudo eliminar" });
  }
};
