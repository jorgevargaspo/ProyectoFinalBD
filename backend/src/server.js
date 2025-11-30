import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database.js";

import categoriaRoutes from "./routes/categoriaRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use("/api/categorias", categoriaRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);

app.listen(3000, () => console.log("Servidor en puerto 3000"));
