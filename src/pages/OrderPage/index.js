import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { getOrderDetails } from '../../actions/orderActions';

const OrderPage = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (!loading) {
    // calculo de valores

    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId))
    }
  }, [order, orderId])

  return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <>
    <h1>Número do Pedido: {order._id}</h1>
    <Row>
      <Col md={8}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>Dados da Entrega:</h2>
            <p><strong>Nome: </strong>{order.user.name}</p>
            <p><strong>Email: </strong><a variant='light' href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
            <p>
              <strong>Endereço: </strong>
              {order.shippingAddress.address}, {order.shippingAddress.neighborhood}, {order.shippingAddress.city}{'/'}{order.shippingAddress.state}{' '}
                CEP: {order.shippingAddress.postalCode}
            </p>
            {order.isDelivered
              ? (<Message variant='success'>Pedido entregue no dia: {order.delivereddAt}</Message>)
              : (<Message variant="danger">Pedido não foi entregue</Message>)}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Forma de Pagamento:</h2>
            <p>
              <strong>Metodo: </strong>
              {order.paymentMethod}
            </p>
            {order.isPaid
              ? (<Message variant='success'>Pago no dia {order.paidAt}</Message>)
              : (<Message variant="danger">Pedido não foi pago</Message>)}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Itens:</h2>
            {order.orderItems.lenght === 0 ? <Message>Você não tem nenhum pedido</Message> : (
              <ListGroup variant="flush">
                {order.orderItems.map((item, index) => {
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
                          {item.qty} x R${item.price} = R${(item.qty * item.price).toFixed(2)}
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
                <Col>R${order.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Frete</Col>
                <Col>R${order.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Taxas</Col>
                <Col>R${order.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>R${order.totalPrice}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>
}

export default OrderPage;
