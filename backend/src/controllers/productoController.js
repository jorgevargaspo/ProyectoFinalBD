import Producto from "../models/Producto.js";

export const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerProductos = async (req, res) => {
  const productos = await Producto.find().populate("categoria");
  res.json(productos);
};

export const obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id).populate("categoria");
    if (!producto) return res.status(404).json({ error: "No encontrado" });
    res.json(producto);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Eliminado" });
  } catch {
    res.status(400).json({ error: "No se pudo eliminar" });
  }
};
