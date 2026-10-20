import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgBannerPrincipal from '../assets/imgBannerPrincipal.jpg';

function BannerPrincipal() {
  return (
    <section className="bg-white py-5 mb-5 border-bottom shadow-sm">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h1 className="display-4 fw-bold text-dark mb-3">
              Papelería de diseño para inspirar tu día
            </h1>
            <p className="lead text-muted mb-4">
              En <strong>Punto Papel</strong> encontramos los detalles que hacen la diferencia. 
              Cuadernos, agendas e insumos de librería pensados para organizar tus proyectos con estilo.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button as={Link} to="/productos" variant="primary" size="lg" className="rounded-pill px-4 shadow-sm">
                Explorar Catálogo 🛍️
              </Button>
              <Button as={Link} to="/contacto" variant="outline-secondary" size="lg" className="rounded-pill px-4">
                Consultas
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img 
              src={imgBannerPrincipal} 
              alt="Librería Punto Papel" 
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BannerPrincipal;