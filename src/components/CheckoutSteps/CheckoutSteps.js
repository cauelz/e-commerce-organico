import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item variant='tabs'>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Login ></Nav.Link>
          </LinkContainer>
        ) : (
            <Nav.Link disabled>Login ></Nav.Link>
          )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Endereço de Entrega > </Nav.Link>
          </LinkContainer>
        ) : (
            <Nav.Link disabled>Endereço de Entrega > </Nav.Link>
          )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Pagamento > </Nav.Link>
          </LinkContainer>
        ) : (
            <Nav.Link disabled>Pagamento > </Nav.Link>
          )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Pedido</Nav.Link>
          </LinkContainer>
        ) : (
            <Nav.Link disabled>Pedido</Nav.Link>
          )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps