import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String }
}, { timestamps: true });

export default mongoose.model("Categoria", categoriaSchema);
