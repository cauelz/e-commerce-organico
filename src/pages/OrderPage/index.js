import React, { useState, useEffect } from "react";
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { getOrderDetails, payOrder } from '../../actions/orderActions';
import { ORDER_PAY_RESET } from '../../constants/orderConstants';

const OrderPage = ({ match }) => {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

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
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, order])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }

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
            {order.isPaid ? (
              <Message variant='success'>Pago na data: {order.paidAt}</Message>
            ) : (
                <Message variant='danger'>Pedido ainda não foi pago</Message>
              )}
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
            {!order.isPaid && (
              <ListGroup.Item>
                {loadingPay && <Loader />}
                {!sdkReady ? (
                  <Loader />
                ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>
}

export default OrderPage;
