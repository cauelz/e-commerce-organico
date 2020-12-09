import React from "react";
import TabList from "../../components/Tab/TabList";
import InputModel from '../../components/Forms/InputModel';
import { Form } from 'react-bootstrap';

const CartaoPage = () => {

  const state = {
    cardInfo: {
      name: {
        elementConfig: {
          inputType: 'text',
          placeholder: 'Julia Barros',
          require: 'required'
        },
        label: 'Nome como está no Cartão',
        value:''
      },
      number: {
        elementConfig: {
          inputType: 'text',
          placeholder: 'Número do cartão de crédito',
          require: 'required'
        },
        label: 'Nome da Pessoa no Cartão',
        value:''
      },
      date: {
        elementConfig: {
          inputType: 'text',
          placeholder: 'Número do cartão de crédito',
          require: 'required'
        },
        label: 'Nome da Pessoa no Cartão',
        value:''
      },
      cvv: {
        elementConfig: {
          inputType: 'password',
          placeholder: '245',
          require: 'required'
        },
        label: 'Nome da Pessoa no Cartão',
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

  return (
    <>
      <TabList />
      <Form className="container">
        <Form.Group controlId='cadastroNovoCartao'>
            {cardElementsArray.map( cardElement =>(
              <InputModel key={cardElement.id.key}
              elementConfig={cardElement.config.elementConfig}
              label={cardElement.config.label} 
              value={cardElement.config.value}/>
            ))}
        </Form.Group>
      </Form>
    </>
  );
};

export default CartaoPage;