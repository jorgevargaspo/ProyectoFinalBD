import { useState } from "react";
import { API } from "../api";

export default function Register({ onRegister }) {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !contrasena) return alert("Completa todos los campos");

    try {
      // Verificar si ya existe
      const resCheck = await API.get(`/usuarios?nombre=${nombre}`);
      if (resCheck.data.length > 0) {
        return alert("Usuario ya existe");
      }

      // Crear usuario
      const res = await API.post("/usuarios", { nombre, contrasena });
      onRegister(res.data.nombre);
    } catch (err) {
      console.error(err);
      alert("Error al registrar");
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
