import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const AddCreditCard = () => {
  return (
    <Form className="container">
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome Impresso no Cartão *</Form.Label>
            <Form.Control type="text" placeholder="Nome Completo" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Número do Cartão *</Form.Label>
            <Form.Control type="text" placeholder="exemplo: 1234-1254-5423-4356" required />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default AddCreditCard;
