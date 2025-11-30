import Pedido from "../models/Pedido.js";

export const crearPedido = async (req, res) => {
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerPedidos = async (req, res) => {
  const pedidos = await Pedido.find()
    .populate("usuarioId")
    .populate("items.productoId");

  res.json(pedidos);
};

export const obtenerPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate("usuarioId")
      .populate("items.productoId");

    if (!pedido) return res.status(404).json({ error: "No encontrado" });

    res.json(pedido);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

export const eliminarPedido = async (req, res) => {
  try {
    await Pedido.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Pedido eliminado" });
  } catch {
    res.status(400).json({ error: "No se pudo eliminar" });
  }
};
