import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer/FormContainer';
import { saveShippingAddress } from '../../actions/cartActions';

const ShippingPage = ({ history }) => {

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [neighborhood, setNeighborhood] = useState(shippingAddress.neighborhood);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({
      address,
      neighborhood,
      city,
      state,
      postalCode,
      country
    }))
    history.push('/payment');
  }

  return (
    <FormContainer>
      <h1>Dados de Entrega</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite seu endereço'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='neighborhood'>
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite seu bairro'
            value={neighborhood}
            required
            onChange={(e) => setNeighborhood(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite o nome da cidade'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='state'>
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite o nome do estado'
            value={state}
            required
            onChange={(e) => setState(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite o CEP'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>País</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite nome do País'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>Continuar</Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingPage;
