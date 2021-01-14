import React from "react";
import LoginModal from "./LoginModal/LoginModal";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import './style.css';




const Header = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="nav-base-size">orgâni.co</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Início</Nav.Link>
          <Nav.Link href="#link">Quem Somos</Nav.Link>
          <NavDropdown title="Produtos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Verduras
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Legumes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Carnes
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Laticínios
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">
              Temperos e Chás
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Blog</Nav.Link>
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
