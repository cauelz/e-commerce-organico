import React from "react";
import FormController from "../../components/Forms/FormController";
import TabList from "../../components/Tab/TabList";

const CartaoPage = () => {

  const inputs = [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      required: 'required',
    },
    {
      label: 'Sobrenome',
      name: 'lastname',
      type: 'text',
      required: 'required',
    },
  ]

  return (
    <>
      <TabList />
      <div class="container text-center">
        <FormController action="/" method="GET" inputs={inputs} />
      </div>
    </>
  );
};

export default CartaoPage;