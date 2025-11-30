export default function Cart({ items, onCheckout }) {
  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  return (
    <div>
      <h3>Carrito</h3>
      {items.length === 0 ? <p>Vacío</p> : (
        <ul>
          {items.map(i => (
            <li key={i._id}>
              {i.nombre} x{i.cantidad} - ${i.precio * i.cantidad}
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${total}</h4>
      {items.length > 0 && <button onClick={onCheckout}>Pagar</button>}
    </div>
  );
}
