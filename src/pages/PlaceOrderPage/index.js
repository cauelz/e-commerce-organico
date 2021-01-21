import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';

const PlaceOrderPage = () => {

  const cart = useSelector((state) => state.cart);

  // calculo de valores

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const placeOrderHandler = () => {
    console.log('order')
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Container>
        <Row>
          <Col md={8}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Dados da Entrega:</h2>
                <p>
                  <strong>Endereço: </strong>
                  {cart.shippingAddress.address}, {cart.shippingAddress.neighborhood}, {cart.shippingAddress.city}{'/'}{cart.shippingAddress.state}{' '}
                CEP: {cart.shippingAddress.postalCode}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Forma de Pagamento:</h2>
                <strong>Metodo: </strong>
                {cart.paymentMethod}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Itens:</h2>
                {cart.cartItems.lenght === 0 ? <Message>Seu carrinho está vazio</Message> : (
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item, index) => {
                      return (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.qty} x R${item.price} = R${item.qty * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )
                    })}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Resumo do Pedido</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Itens</Col>
                    <Col>R${cart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Frete</Col>
                    <Col>R${cart.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Taxas</Col>
                    <Col>R${cart.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>R${cart.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={cart.cartItems === 0}
                    onClick={placeOrderHandler}
                  >
                    Fazer Pedido
                </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PlaceOrderPage;
