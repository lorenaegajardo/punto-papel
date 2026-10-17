
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BarraNavegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Punto Papel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu" />

        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacion
