import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import './style.css';




const Header = () => {
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
          <Nav.Link href="/">Dúvidas</Nav.Link>
          <Nav.Link href="/">Contato</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="faça sua busca" className="mr-sm-2" />
          <Button variant="outline-success"><i class="fas fa-search"></i></Button>
        </Form>
        <Nav.Link href="#home"><i class="far fa-comments nav-fontawesome-icon"></i></Nav.Link>
        <Nav.Link href="#home"><i class="fas fa-shopping-cart nav-fontawesome-icon"></i></Nav.Link>
        <LinkContainer to='/login'>
          <Nav.Link><i class="far fa-user nav-fontawesome-icon"></i></Nav.Link>
        </LinkContainer>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Header;
