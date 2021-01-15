import React from "react";
import { Modal, Button, FormControl, Container } from "react-bootstrap";
import "../style.css";

const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Faça login ou cadastre-se
        </Modal.Title>
      </Modal.Header>
      <Container className="d-flex">
        <Modal.Body>
          <h4 className="m-3">Dados de Login</h4>
          <FormControl
            className="m-3"
            placeholder="Usuário"
            aria-label="Usuário"
            aria-describedby="basic-addon2"
          />
          <FormControl
            className="m-3"
            type="password"
            placeholder="Senha"
            aria-label="Senha"
            aria-describedby="basic-addon2"
          />
          <Button type="submit" variant="outline-success" className="mx-3">Entrar</Button>
          <Button type="submit" variant="link" className="mx-1" size="sm">esqueci minha senha</Button>
        </Modal.Body>
        <Modal.Body>
          <h4 className="m-3">Dados de Cadastro</h4>
          <FormControl
            className="m-3"
            placeholder="Primeiro Nome"
            aria-label="Primeiro Nome"
            aria-describedby="basic-addon2"
          />
          <FormControl
            className="m-3"
            placeholder="Último Nome"
            aria-label="Último Nome"
            aria-describedby="basic-addon2"
          />
          <FormControl
            className="m-3"
            placeholder="E-mail"
            aria-label="E-mail"
            aria-describedby="basic-addon2"
          />
          <FormControl
            className="m-3"
            type="password"
            placeholder="Senha"
            aria-label="Senha"
            aria-describedby="basic-addon2"
          />
          <FormControl
            className="m-3"
            type="password"
            placeholder="Confirmação de Senha"
            aria-label="Confirmação de Senha"
            aria-describedby="basic-addon2"
          />
          <Button type="submit" variant="outline-success" className="mx-3">Cadastre-se</Button>
        </Modal.Body>
      </Container>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
