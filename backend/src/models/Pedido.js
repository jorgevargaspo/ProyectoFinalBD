import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },
  items: [
    {
      productoId: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
      cantidad: { type: Number, required: true },
      precioUnitario: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  estadoPago: { type: String, enum: ["Aprobado", "Rechazado"], required: true },
}, { timestamps: true });

export default mongoose.model("Pedido", pedidoSchema);
