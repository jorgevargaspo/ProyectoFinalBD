import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria", required: true },
  precio: { type: Number, required: true },
  colores: [{ type: String }],
  hechoEn: { type: String, enum: ["Mano", "Maquina"], required: true },
  imagenes: [{ type: String }],
  vistas: { type: Number, default: 0 },
  compras: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Producto", productoSchema);
