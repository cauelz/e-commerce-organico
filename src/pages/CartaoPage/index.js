import React, {useState} from "react";
import TabList from "../../components/Tab/TabList";
import InputModel from '../../components/Forms/InputModel';
import { Form } from 'react-bootstrap';

const CartaoPage = () => {

   const [inputValues, setInputValues] = useState({
      name: {
        elementConfig: {
          type: 'text',
          placeholder: "Julia Barros",
          required: true
        },
        label: 'Nome como está no Cartão',
        value:''
      },
      number: {
        elementConfig: {
          type: 'text',
          placeholder: '1234 1233 3215 3215',
          required: true
        },
        label: 'Número do cartão de crédito',
        value:''
      },
      date: {
        elementConfig: {
          type: 'text',
          placeholder: 'Número do cartão de crédito',
          required: true
        },
        label: 'Data de Vencimento',
        value:''
      },
      cvv: {
        elementConfig: {
          type: 'password',
          placeholder: '245',
          required: true
        },
        label: 'CVV',
        value:''
      },
  });

  const cardElementsArray = [];
  for (let key in inputValues.cardInfo) {
    cardElementsArray.push({
      id: key,
      config: inputValues[key]
    });
  }

  const inputChangedHandler = (event, inputIdentifier) => {

      const updatedCardForm = {
        ...inputValues
      };
      const updatedCardElement = {
        ...updatedCardForm[inputIdentifier]
      };
      updatedCardElement.value = event.target.value;
      updatedCardForm[inputIdentifier] = updatedCardElement;
      setInputValues(updatedCardForm);
  }

  return (
    <>
      <TabList />
      <Form className="container">
        <Form.Group controlId='cadastroNovoCartao'>
            {cardElementsArray.map( cardElement =>(
              <InputModel key={cardElement.id}
              elementConfig={cardElement.config.elementConfig}
              label={cardElement.config.label} 
              value={cardElement.config.value}
              changed={event => inputChangedHandler(event, cardElement.id)}
              />
            ))}
        </Form.Group>
      </Form>
    </>
  );
};

export default CartaoPage;