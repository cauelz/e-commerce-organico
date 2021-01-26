import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";
import './style.css';
import { logout } from '../../actions/userActions';

const Header = () => {

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
  }

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
          <Nav.Link href="/institucional">Quem Somos</Nav.Link>
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
        <LinkContainer to='/carrinho'>
          <Nav.Link><i class="fas fa-shopping-cart nav-fontawesome-icon"></i></Nav.Link>
        </LinkContainer>
        {userInfo ? (
          <NavDropdown className='mx-2' title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) :
          <LinkContainer to='/login'>
            <Nav.Link variant='light'><i class="far fa-user nav-fontawesome-icon"></i></Nav.Link>
          </LinkContainer>
        }

      </Navbar.Collapse >
    </Navbar >

  );
}

export default Header;
