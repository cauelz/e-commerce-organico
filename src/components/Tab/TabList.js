import React from "react";
import TabItem from "./TabItem";

const TabList = () => {

  const tabData = [{
    tabName: 'Home',
    tabId:'/user'
  }, {
    tabName: 'Meu Cadastro',
    tabId:'/user/cadastro'
  }, {
    tabName: 'Meus Cartões',
    tabId:'/user/cartao'
  }, {
    tabName: 'Meus Pedidos',
    tabId:'/user/pedidos'
  }, {
    tabName: 'Atendimento ao Cliente',
    tabId:'/user/atendimento'
  }, {
    tabName: 'Notificações',
    tabId:'/user/notificacoes'
  }];

  return (
    <>
        <TabItem tabData={tabData}></TabItem>
    </>
  );
};

export default TabList;
