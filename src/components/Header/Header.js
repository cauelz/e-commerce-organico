import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import LoginModal from "./LoginModal/LoginModal";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import './style.css';




const Header = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to='/'>
        <Navbar.Brand className="nav-base-size">orgâni.co</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to='/'>
            <Nav.Link>Início</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#link">Quem Somos</Nav.Link>
          <Nav.Link href="/produtos">Produtos</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="#home">Dúvidas</Nav.Link>
          <Nav.Link href="#home">Contato</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="faça sua busca" className="mr-sm-2" />
          <Button variant="outline-success"><i class="fas fa-search"></i></Button>
        </Form>
        <Nav.Link href="#home"><i class="far fa-comments nav-fontawesome-icon"></i></Nav.Link>
        <Nav.Link href="#home"><i class="fas fa-shopping-cart nav-fontawesome-icon"></i></Nav.Link>
        <Nav.Link href="#home" onClick={() => setModalShow(true)}><i class="far fa-user nav-fontawesome-icon"></i></Nav.Link>
      </Navbar.Collapse>

      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </Navbar>

  );
}

export default Header;
