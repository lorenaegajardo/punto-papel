import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function BarraNavegacion() {
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

        <Navbar.Toggle aria-controls="menu-navegacion" />

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
            
            <Nav.Link 
              as={NavLink} 
              to="/carrito" 
              className="btn btn-outline-primary position-relative px-3 py-1 ms-lg-2 mt-2 mt-lg-0 text-primary border-primary rounded-pill"
            >
              🛒 Carrito
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;