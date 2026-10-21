import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function BarraNavegacion({ cantidadTotal }) {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-2">
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold fs-4 d-flex align-items-center gap-2 text-primary"
        >
          <span className="fs-3">✏️</span>
          <span>Punto <span className="text-secondary fw-normal">Papel</span></span>
        </Navbar.Brand>

        {/* CONTENEDOR MÓVIL: Muestra el ícono del carrito más el botón hamburguesa en celulares y tablets */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          {cantidadTotal > 0 && (
            <Nav.Link 
              as={Link} 
              to="/carrito" 
              className="position-relative text-primary px-2 py-1 fs-5"
              style={{ textDecoration: 'none' }}
            >
              🛒
              <span 
                className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.65rem' }}
              >
                {cantidadTotal}
              </span>
            </Nav.Link>
          )}
          <Navbar.Toggle aria-controls="menu-navegacion" />
        </div>

        {/* MENÚ HAMBURGUESA */}
        <Navbar.Collapse id="menu-navegacion">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end className="fw-medium">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productos" className="fw-medium">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="fw-medium">
              Contacto
            </Nav.Link>
            
            {/* BOTÓN DE CARRITO TRADICIONAL (Visible solo en pantallas de escritorio) */}
            <Nav.Link 
              as={NavLink} 
              to="/carrito" 
              className="btn btn-outline-primary position-relative px-3 py-1 ms-lg-2 mt-2 mt-lg-0 text-primary border-primary rounded-pill d-none d-lg-block"
            >
              🛒 Carrito {cantidadTotal > 0 && (
                <span className="badge bg-primary rounded-pill ms-1">
                    {cantidadTotal}
                </span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;