import { Button, Card } from "react-bootstrap"
import { Link } from "react-router";
import styles from "./ProductoCard.module.css"

function ProductoCard({ producto, agregarAlCarrito, cantidadEnCarrito }) {
  const stockDisponible = producto.stock - cantidadEnCarrito

  return (
    <>
      <Card className={`h-100 ${styles.productoCard}`}>
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} className={styles.productoImage} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold">
            {producto.nombre}
          </Card.Title>
          <Card.Text>
            {producto.descripcion}
          </Card.Text>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold">${producto.precio.toLocaleString("es-AR")}</h5>
              <h6 className={stockDisponible > 0 ? "" : "text-danger fw-bold"}>
                {stockDisponible > 0 ? `Stock: ${stockDisponible}` : "Sin Stock"}
              </h6>
            </div>
            <div className="d-flex justify-content-between gap-3" >
              <Button as={Link} to={`/producto/${producto.id}`} className={`flex-fill ${styles.productoButtonDetalle}`}>
                Ver Detalles
              </Button>
              <Button className={`flex-fill ${styles.productoButtonCompra}`} onClick={() => agregarAlCarrito(producto)} disabled={stockDisponible <= 0}>
                Agregar
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductoCard