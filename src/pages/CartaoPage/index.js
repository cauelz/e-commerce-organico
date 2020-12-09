import React from "react";
import TabList from "../../components/Tab/TabList";
import InputModel from '../../components/Forms/InputModel';

const CartaoPage = () => {

  const inputCartao = [
    { inputType: 'text',
      controlId: 'userCardName',
      placeholder: 'Julia Barros',
      label: 'Nome da Pessoa no Cartão'
    }
  ]

  return (
    <>
        <TabList />
        <InputModel inputCartao={inputCartao}></InputModel>
    </>
  );
};

export default CartaoPage;