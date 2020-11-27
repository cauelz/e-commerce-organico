import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tab from "../../components/Tab/Tab";

const UserPage = () => {

  const tabData = [{tabName:'Home'},{tabName:'Meu Cadastro'},{tabName:'Meus Cartões'},{tabName:'Meus Pedidos'},{tabName:'Atendimento ao Cliente'},{tabName:'Notificações'}];

  return (
    <>
      <Header></Header>
      <Tab tabData={tabData}></Tab>


        /*RENDERIZAÇÃO CONDICIONAL DO CONTEÚDO DA PÁGINA */


      <Footer></Footer>
    </>
  );
};

export default UserPage;
