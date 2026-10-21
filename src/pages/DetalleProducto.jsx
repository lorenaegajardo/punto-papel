import { Button, Col, Row } from "react-bootstrap"
import { productos } from "../data/productos"
import { Link, useParams } from "react-router-dom"
import styles from "./DetalleProducto.module.css"

function DetalleProducto({ agregarAlCarrito, carrito }) {
  const { id } = useParams()
  const producto = productos.find((p) => p.id === parseInt(id))

  if (!producto) {
    return (
      <>
        <div className={styles.noEncontrado}>
          <div className="bg-light p-5 rounded-5 border border-primary">
            <h2>Producto no encontrado</h2>
            <h6>El producto no existe o fue eliminado</h6>
            <Button as={Link} to={"/productos"} variant="outline-dark" className="fw-bold mt-2">
              Volver al catálogo
            </Button>
          </div>
        </div>
      </>
    )
  }

  const stockDisponible = (producto.stock || 0) - (carrito.find(item => item.id === producto.id)?.cantidad || 0)

  return (
    <div className="container mt-4">
      <Row className="g-5">
        <Col md={6} lg={7}>
          <div className={`d-flex justify-content-center align-items-center p-3 ${styles.productoImagenContainer}`}>
            <img src={producto.imagen} alt={producto.nombre} className={`img-fluid p-3 ${styles.productoImagenDetalle}`} />
          </div>
        </Col>
        <Col md={6} lg={5} >
          <div className={styles.productoDetalle}>
            <div className={`d-inline-flex bg-primary ${styles.productoCategoria}`}>
              <h6 className="m-0 fw-bold text-light">{producto.categoria.toUpperCase()}</h6>
            </div>
            <h2 className="fw-bold">{producto.nombre}</h2>
            <h4>{producto.descripcion}</h4>
            <h2 className="fw-bold mb-0 mt-4">${producto.precio.toLocaleString("es-AR")}</h2>
            <h5 className={stockDisponible > 0 ? "" : "text-danger fw-bold"}>
              {stockDisponible > 0 ? `Stock: ${stockDisponible}` : "Sin Stock"}
            </h5>
            <div className="d-flex justify-content-center gap-3">
              <Button as={Link} to={"/productos"} variant="outline-dark" className="flex-fill fw-bold" >
                Volver al catálogo
              </Button>
              <Button variant="dark" className="flex-fill fw-bold" onClick={() => agregarAlCarrito(producto)} disabled={stockDisponible <= 0}>
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DetalleProducto