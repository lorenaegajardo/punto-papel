import React, { useState } from 'react';
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Formulario({ carrito, totalCarrito, vaciarCarrito }) {
  // Estado para el formulario controlado
  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    telefono: '',
    direccion: '',
    metodoEntrega: 'Envío a domicilio',
    mensaje: ''
  });

  const [errores, setErrores] = useState({});
  const [ordenId, setOrdenId] = useState(null);

  // Manejador genérico onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validaciones exigidas por la cátedra
  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.nombreApellido.trim()) {
      nuevosErrores.nombreApellido = 'El nombre y apellido son obligatorios.';
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nuevosErrores.email = 'El formato del email no es válido.';
    }

    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio.';
    }

    if (!formData.direccion.trim()) {
      nuevosErrores.direccion = 'La dirección o localidad es obligatoria.';
    }

    if (carrito.length === 0) {
      nuevosErrores.carrito = 'El carrito está vacío. Agregue productos antes de confirmar.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejador onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      // Generamos un ID de orden simulado
      const idCompra = Math.floor(100000 + Math.random() * 900000);
      setOrdenId(idCompra);

      // Vaciamos el carrito
      vaciarCarrito();
    }
  };

  // Pantalla de confirmación de compra exitosa
  if (ordenId) {
    return (
      <Container className="mt-5 text-center">
        <Card className="p-5 shadow border-success">
          <Card.Body>
            <h2 className="text-success mb-3">¡Compra Confirmada con Éxito! 🎉</h2>
            <p className="lead">Gracias por confiar en <strong>Punto Papel</strong>.</p>
            <p className="mb-2">Tu número de orden es: <strong>#{ordenId}</strong></p>
            <p className="text-muted small mb-4">Te hemos enviado los detalles de facturación a <strong>{formData.email}</strong>.</p>
            <Link to="/productos" className="btn btn-primary px-4 py-2">
              Volver al Catálogo
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-4 mb-5">
      <h2 className="mb-4 text-primary">📋 Formulario de Compra</h2>

      {errores.carrito && <Alert variant="danger">{errores.carrito}</Alert>}

      <Row>
        {/* Formulario controlado */}
        <Col md={7} className="mb-4">
          <Card className="shadow-sm p-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre y Apellido *</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreApellido"
                  value={formData.nombreApellido}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  isInvalid={!!errores.nombreApellido}
                />
                <Form.Control.Feedback type="invalid">
                  {errores.nombreApellido}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: juan@email.com"
                  isInvalid={!!errores.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errores.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teléfono *</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 1122334455"
                  isInvalid={!!errores.telefono}
                />
                <Form.Control.Feedback type="invalid">
                  {errores.telefono}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Dirección o Localidad *</Form.Label>
                <Form.Control
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Ej: Av. Rivadavia 4500, CABA"
                  isInvalid={!!errores.direccion}
                />
                <Form.Control.Feedback type="invalid">
                  {errores.direccion}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Método de Entrega</Form.Label>
                <Form.Select
                  name="metodoEntrega"
                  value={formData.metodoEntrega}
                  onChange={handleChange}
                >
                  <option value="Envío a domicilio">Envío a domicilio</option>
                  <option value="Retiro en sucursal">Retiro en sucursal</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje o aclaración (Opcional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Instrucciones adicionales para la entrega..."
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100 py-2 fw-bold">
                Finalizar Compra
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Resumen del pedido al lado */}
        <Col md={5}>
          <Card className="shadow-sm p-3 bg-light">
            <h4 className="mb-3">Resumen de tu Compra</h4>
            <ul className="list-unstyled mb-3">
              {carrito.map(prod => (
                <li key={prod.id} className="d-flex justify-content-between mb-2 border-bottom pb-2">
                  <span>{prod.nombre} (x{prod.cantidad})</span>
                  <strong>${(prod.precio * prod.cantidad).toLocaleString("es-AR")}</strong>
                </li>
              ))}
            </ul>
            <hr />
            <h4 className="d-flex justify-content-between text-dark">
              <span>Total:</span>
              <span className="text-success">${totalCarrito.toLocaleString("es-AR")}</span>
            </h4>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Formulario;