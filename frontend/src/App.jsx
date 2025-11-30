import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (nombre) => {
    localStorage.setItem("usuario", nombre);
    setUsuario(nombre);
  };

  const handleRegister = (nombre) => {
    localStorage.setItem("usuario", nombre);
    setUsuario(nombre);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  if (usuario) return <Home usuario={usuario} />;

  return showRegister ? (
    <Register onRegister={handleRegister} />
  ) : (
    <Login onLogin={handleLogin} onSwitchRegister={() => setShowRegister(true)} />
  );
}

export default App;
