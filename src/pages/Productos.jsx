import { useState } from "react";
import { Row, Col, Form, ListGroup, Card } from "react-bootstrap";
import ProductoCard from "../components/ProductoCard/ProductoCard";
import { productos } from "../data/productos";

function Productos({ agregarAlCarrito, carrito }) {
  // 1. ESTADOS PARA FILTRADO Y ORDENAMIENTO
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [ordenPrecio, setOrdenPrecio] = useState("defecto");

  // 2. OBTENER CATEGORÍAS ÚNICAS DINÁMICAMENTE
  const categorias = ["Todas", ...new Set(productos.map((p) => p.categoria))];

  // 3. APLICAR FILTRADO POR CATEGORÍA
  const productosFiltrados = productos.filter((producto) => {
    if (categoriaSeleccionada === "Todas") return true;
    return producto.categoria === categoriaSeleccionada;
  });

  // 4. APLICAR ORDENAMIENTO POR PRECIO
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (ordenPrecio === "menor-mayor") {
      return a.precio - b.precio;
    }
    if (ordenPrecio === "mayor-menor") {
      return b.precio - a.precio;
    }
    return 0; // Orden por defecto
  });

  return (
    <div className="container mt-4 mb-5">
      <div className="mb-4">
        <h1 className="fw-bold text-primary">Nuestros Productos</h1>
        <p className="text-muted">
          Descubre nuestra amplia selección de artículos para tu librería, oficina y hogar.
        </p>
      </div>

      <Row className="g-4">
        {/* ASIDE DE NAVEGACIÓN Y FILTROS (Columna izquierda) */}
        <Col lg={3}>
          <aside className="sticky-top" style={{ top: "90px" }}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
              <Card.Body>
                <h5 className="fw-bold mb-3">📁 Categorías</h5>
                <ListGroup variant="flush">
                  {categorias.map((cat) => (
                    <ListGroup.Item
                      key={cat}
                      action
                      active={categoriaSeleccionada === cat}
                      onClick={() => setCategoriaSeleccionada(cat)}
                      className="rounded-3 mb-1 border-0 fw-medium"
                    >
                      {cat}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </aside>
        </Col>

        {/* SECCIÓN PRINCIPAL DE PRODUCTOS (Columna derecha) */}
        <Col lg={9}>
          {/* BARRA SUPERIOR CON CONTADOR Y DESPLEGABLE DE ORDEN */}
          <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-3 rounded-4 shadow-sm">
            <span className="text-muted small fw-semibold">
              Mostrando {productosOrdenados.length} productos
            </span>

            <div className="d-flex align-items-center gap-2">
              <Form.Label htmlFor="select-orden" className="mb-0 text-nowrap small fw-bold">
                Ordenar por:
              </Form.Label>
              <Form.Select
                id="select-orden"
                value={ordenPrecio}
                onChange={(e) => setOrdenPrecio(e.target.value)}
                size="sm"
                className="rounded-pill shadow-none"
                style={{ minWidth: "180px" }}
              >
                <option value="defecto">Destacados</option>
                <option value="menor-mayor">Precio: Menor a Mayor ⬆️</option>
                <option value="mayor-menor">Precio: Mayor a Menor ⬇️</option>
              </Form.Select>
            </div>
          </div>

          {/* GRILLA DE PRODUCTOS */}
          {productosOrdenados.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 shadow-sm">
              <h5>No hay productos disponibles en esta categoría.</h5>
            </div>
          ) : (
            <Row className="g-4">
              {productosOrdenados.map((p) => (
                <Col sm={6} xl={4} key={p.id} className="d-flex align-items-stretch">
                  <ProductoCard
                    producto={p}
                    agregarAlCarrito={agregarAlCarrito}
                    cantidadEnCarrito={carrito.find((item) => item.id === p.id)?.cantidad || 0}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Productos;