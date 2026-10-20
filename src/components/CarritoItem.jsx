

function CarritoItem({ producto, cambiarCantidad, eliminarDelCarrito }) {
  const subtotal = producto.precio * producto.cantidad;
  const esStockMaximo = producto.cantidad >= producto.stock;

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center p-3 mb-2 shadow-sm rounded">
      <div>
        <h5 className="mb-1">{producto.nombre}</h5>
        <p className="mb-1 text-muted small">
          Precio unitario: ${producto.precio.toLocaleString("es-AR")} | Stock disponible: {producto.stock}
        </p>
        <p className="mb-0 fw-bold text-success">
          Subtotal: ${subtotal.toLocaleString("es-AR")}
        </p>
      </div>

      <div className="d-flex align-items-center">
        {/* Controles de cantidad que se comunican con el cambiarCantidad de App.js */}
        <div className="btn-group me-3" role="group">
          <button 
            className="btn btn-outline-secondary btn-sm" 
            onClick={() => cambiarCantidad(producto.id, producto.cantidad - 1)}
          >
            -
          </button>
          <span className="btn btn-light btn-sm disabled px-3 text-dark fw-bold">
            {producto.cantidad}
          </span>
          <button 
            className={`btn btn-outline-secondary btn-sm ${esStockMaximo ? 'disabled' : ''}`} 
            onClick={() => cambiarCantidad(producto.id, producto.cantidad + 1)}
            title={esStockMaximo ? "Stock máximo alcanzado" : "Aumentar cantidad"}
          >
            +
          </button>
        </div>

        {/* Botón para eliminar vinculado a eliminarDelCarrito */}
        <button 
          className="btn btn-danger btn-sm" 
          onClick={() => eliminarDelCarrito(producto.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default CarritoItem;
