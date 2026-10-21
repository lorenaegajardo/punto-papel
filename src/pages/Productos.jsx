import { Col, Row } from "react-bootstrap"
import ProductoCard from "../components/ProductoCard/ProductoCard"
import { productos } from "../data/productos"

function Productos({ agregarAlCarrito, carrito }) {
  return (
    <div className="container mt-4">
      <h1>Nuestros Productos</h1>
      <p>Descubre nuestra amplia selección de artículos para tu oficina y hogar.</p>
      <Row className="g-5">
        {productos.map((p) => (
          <Col sm={6} lg={4} xl={3} key={p.id} className="d-flex justify-content-center">
            <ProductoCard
                producto={p}
                agregarAlCarrito={agregarAlCarrito}
                cantidadEnCarrito={carrito.find(item => item.id === p.id)?.cantidad || 0}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Productos
