import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));
