import React, {useState} from "react";
import TabList from "../../components/Tab/TabList";
import InputModel from '../../components/Forms/InputModel';
import { Form } from 'react-bootstrap';

const CartaoPage = () => {

  const [inputValues, setInputValues] = useState({});

  const state = {
    cardInfo: {
      name: {
        elementConfig: {
          type: 'text',
          placeholder: "Julia Barros",
          require: true
        },
        label: 'Nome como está no Cartão',
        value:''
      },
      number: {
        elementConfig: {
          type: 'text',
          placeholder: '1234 1233 3215 3215',
          require: true
        },
        label: 'Número do cartão de crédito',
        value:''
      },
      date: {
        elementConfig: {
          type: 'text',
          placeholder: 'Número do cartão de crédito',
          require: true
        },
        label: 'Data de Vencimento',
        value:''
      },
      cvv: {
        elementConfig: {
          type: 'password',
          placeholder: '245',
          require: true
        },
        label: 'CVV',
        value:''
      },
    }
  };

  const cardElementsArray = [];
  for (let key in state.cardInfo) {
    cardElementsArray.push({
      id: key,
      config: state.cardInfo[key]
    });
  }

  const inputChangedHandler = (event, inputIdentifier) => {

      let updatedCardForm = inputValues;
      updatedCardForm = {
        ...state.cardInfo
      };
      let updatedCardElement = {
        ...updatedCardForm[inputIdentifier]
      };
      updatedCardElement.value = event.target.value;
      updatedCardForm[inputIdentifier] = updatedCardElement;
      setInputValues({cardInfo: updatedCardForm});
  }

  return (
    <>
      <TabList />
      <Form className="container">
        <Form.Group controlId='cadastroNovoCartao'>
            {cardElementsArray.map( cardElement =>(
              <InputModel key={cardElement.id.key}
              elementConfig={cardElement.config.elementConfig}
              label={cardElement.config.label} 
              value={cardElement.config.value}
              changed={(event) => inputChangedHandler(event, cardElement.id)}
              />
            ))}
        </Form.Group>
      </Form>
    </>
  );
};

export default CartaoPage;