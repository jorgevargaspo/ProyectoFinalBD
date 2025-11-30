import { useState } from "react";
import { API } from "../api";

export default function Login({ onLogin, onSwitchRegister }) {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !contrasena) return alert("Completa todos los campos");

    try {
      const res = await API.get(`/usuarios?nombre=${nombre}&contrasena=${contrasena}`);
      if (res.data.length === 0) {
        return alert("Usuario o contraseña incorrecta");
      }
      onLogin(nombre);
    } catch (err) {
      console.error(err);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
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
        <button type="submit">Entrar</button>
      </form>
      <p>
        ¿No tienes cuenta?{" "}
        <button className="link-btn" onClick={onSwitchRegister}>
          Regístrate
        </button>
      </p>
    </div>
  );
}
