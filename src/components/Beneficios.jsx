import { Row, Col } from 'react-bootstrap';

function Beneficios() {
  return (
    <Row className="g-3 text-center my-5">
      <Col md={4}>
        <div className="p-4 bg-white rounded-3 shadow-sm h-100">
          <div className="fs-1 mb-2">📦</div>
          <h5 className="fw-bold">Envíos Rápidos</h5>
          <p className="text-muted small mb-0">Despachamos tus pedidos de papelería en 24/48 horas hábiles.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="p-4 bg-white rounded-3 shadow-sm h-100">
          <div className="fs-1 mb-2">💳</div>
          <h5 className="fw-bold">Pagos Seguros</h5>
          <p className="text-muted small mb-0">Aceptamos tarjetas de débito, crédito y transferencias sin recargo.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="p-4 bg-white rounded-3 shadow-sm h-100">
          <div className="fs-1 mb-2">💌</div>
          <h5 className="fw-bold">Atención Personalizada</h5>
          <p className="text-muted small mb-0">Te asesoramos para elegir los insumos ideales para tu estudio o trabajo.</p>
        </div>
      </Col>
    </Row>
  );
}

export default Beneficios;