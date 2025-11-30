import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  direccion: { type: String },
  telefono: { type: String },
}, { timestamps: true });

export default mongoose.model("Usuario", usuarioSchema);
