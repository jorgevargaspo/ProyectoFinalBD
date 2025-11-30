import express from "express";
import {
  crearPedido,
  obtenerPedidos,
  obtenerPedido,
  eliminarPedido
} from "../controllers/pedidoController.js";

const router = express.Router();

router.post("/", crearPedido);
router.get("/", obtenerPedidos);
router.get("/:id", obtenerPedido);
router.delete("/:id", eliminarPedido);

export default router;
