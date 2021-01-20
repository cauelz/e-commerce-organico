import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer/FormContainer';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import { savePaymentMethod } from '../../actions/cartActions';

const PaymentPage = ({ history }) => {

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder');
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Formas de Pagamento</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal ou Cartão de Crédito'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onCharge={(e) => setPaymentMethod(e.target.value)}
            >

            </Form.Check>
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>Continuar</Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage;
