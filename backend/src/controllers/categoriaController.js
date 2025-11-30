import Categoria from "../models/Categoria.js";

export const crearCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

export const obtenerCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) return res.status(404).json({ error: "No encontrada" });
    res.json(categoria);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

export const actualizarCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Eliminada" });
  } catch {
    res.status(400).json({ error: "No se pudo eliminar" });
  }
};
