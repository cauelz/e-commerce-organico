import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Teste = () => {
  return (
    <Form className="container">
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Teste *</Form.Label>
            <Form.Control type="text" placeholder="Nome Completo" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Teste2 *</Form.Label>
            <Form.Control type="text" placeholder="exemplo: 1234-1254-5423-4356" required />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Teste;
