export default function ProductCard({ producto, addToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "180px" }}>
      <h4>{producto.nombre}</h4>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </div>
  );
}
