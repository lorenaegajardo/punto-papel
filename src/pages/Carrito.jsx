import CarritoItem from '../components/CarritoItem';
import { Link } from 'react-router'; 

function Carrito({ carrito, cambiarCantidad, eliminarDelCarrito, totalCarrito, cantidadTotal }) {
  
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