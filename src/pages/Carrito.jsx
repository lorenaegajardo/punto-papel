import { useState } from 'react';
import CarritoItem from '../components/CarritoItem';
import { Link } from 'react-router'; // 

function Carrito({ carrito, cambiarCantidad, eliminarDelCarrito, totalCarrito, cantidadTotal }) {
  
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const confirmarCompra = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    setCompraConfirmada(true);
  };

  if (compraConfirmada) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-success p-4 shadow">
          <h2 className="alert-heading">¡Compra Confirmada! 🎉</h2>
          <p>Tu compra se ha realizado con éxito.</p>
          <Link to="/productos" className="btn btn-outline-success mt-3">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">🛒 Tu Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <div className="alert alert-info text-center p-4">
          <h4>Tu carrito está vacío</h4>
          <p className="mb-0">Agregá productos desde el catálogo para comenzar tu compra.</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="list-group">
              {carrito.map(prod => (
                <CarritoItem 
                  key={prod.id} 
                  producto={prod} 
                  cambiarCantidad={cambiarCantidad} 
                  eliminarDelCarrito={eliminarDelCarrito} 
                />
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4 className="card-title mb-3">Resumen del pedido</h4>
              <p className="d-flex justify-content-between">
                <span>Cantidad total de artículos:</span> 
                <strong>{cantidadTotal}</strong>
              </p>
              <hr />
              <h3 className="d-flex justify-content-between text-dark mb-4">
                <span>Total:</span> 
                <span className="text-success">${totalCarrito.toLocaleString("es-AR")}</span>
              </h3>
              {/*Link que se encarga de llevarnos al formulario de compra */}
<Link 
  to="/checkout" 
  className="btn btn-primary w-100 py-2 fw-bold text-center text-decoration-none"
>
  Ir al Formulario de Compra
</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;