import { Container, Row, Col, Card } from 'react-bootstrap';

function Contacto() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">📍 Contactate con Punto Papel</h1>
        <p className="text-muted lead">
          Estamos acá para responder tus consultas y acompañar tus proyectos de papelería y diseño.
        </p>
      </div>

      <Row className="g-4 justify-content-center">
        {/* Tarjeta 1: Ubicación */}
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="border-0 shadow-sm rounded-4 p-4 text-center w-100 bg-white">
            <Card.Body>
              <div className="fs-1 mb-3">🏢</div>
              <h4 className="fw-bold mb-3">Sucursal</h4>
              <p className="text-muted mb-0">
                Av. Vergara 2222<br />
                Hurlingham, Buenos Aires<br />
                Argentina
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Tarjeta 2: Horarios */}
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="border-0 shadow-sm rounded-4 p-4 text-center w-100 bg-white">
            <Card.Body>
              <div className="fs-1 mb-3">🕒</div>
              <h4 className="fw-bold mb-3">Horarios de Atención</h4>
              <p className="text-muted mb-0">
                Lunes a Viernes: 9:00 a 18:00 hs.<br />
                Sábados: 9:00 a 13:00 hs.<br />
                Domingos y feriados: Cerrado
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Tarjeta 3: Medios de contacto directo */}
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="border-0 shadow-sm rounded-4 p-4 text-center w-100 bg-white">
            <Card.Body>
              <div className="fs-1 mb-3">📞</div>
              <h4 className="fw-bold mb-3">Canales Directos</h4>
              <p className="text-muted mb-2">
                <strong>Email:</strong><br />
                contacto@puntopapel.com.ar
              </p>
              <p className="text-muted mb-0">
                <strong>WhatsApp / Teléfono:</strong><br />
                +54 11 4444-5555
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;