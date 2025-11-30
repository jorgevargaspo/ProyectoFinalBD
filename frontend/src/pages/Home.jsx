import { useEffect, useState } from "react";
import { API } from "../api";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

export default function Home({ usuario, onLogout }) {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Obtener categorias y normalizar _id a string
    API.get("/categorias")
      .then(res => {
        const cats = res.data.map(c => ({ ...c, _id: String(c._id) }));
        setCategorias(cats);
      })
      .catch(err => {
        console.error("Error categorias:", err);
        setCategorias([]);
      });

    // Obtener productos y normalizar categoria_id y _id a string
    API.get("/productos")
      .then(res => {
        const prods = res.data.map(p => ({
          ...p,
          _id: String(p._id),
          // si categoria_id viene como ObjectId u objeto, convertirlo a string
          categoria_id: p.categoria_id ? String(p.categoria_id) : null
        }));
        setProductos(prods);
      })
      .catch(err => {
        console.error("Error productos:", err);
        setProductos([]);
      });
  }, []);

  const addToCart = (producto) => {
    setCartItems(prev => {
      const existing = prev.find(p => p._id === producto._id);
      if (existing) {
        return prev.map(p =>
          p._id === producto._id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const handleCheckout = () => {
    const exito = Math.random() < 0.8; // 80% éxito
    if (exito) {
      alert("Compra exitosa!");
      setCartItems([]);
    } else {
      alert("Compra fallida!");
    }
  };

  return (
    <div className="home-container">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
        <div>
          <strong>Tienda Alpaca</strong>
          <span style={{ marginLeft: 12 }}> | Hola, {usuario}</span>
        </div>
        <div>
          <button onClick={() => { 
            // botón de logout: borra localStorage y recarga app
            localStorage.removeItem("usuario");
            if (typeof onLogout === "function") onLogout();
            else window.location.reload();
          }}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <div className="productos-container">
        {categorias.map(cat => (
          <div key={cat._id} className="categoria-block">
            <h3>{cat.nombre}</h3>
            <div className="productos-grid">
              {productos
                .filter(p => p.categoria_id === cat._id) // ahora compara strings
                .map(p => (
                  <ProductCard key={p._id} producto={p} addToCart={addToCart} />
                ))}
            </div>
          </div>
        ))}
      </div>

      <Cart items={cartItems} onCheckout={handleCheckout} />
    </div>
  );
}
