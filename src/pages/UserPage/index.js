import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tab from "../../components/Tab/Tab";

const UserPage = () => {

  const tabData = ['Home','Meu Cadastro','Meus Cartões','Meus Pedidos','Atendimento ao Cliente','Notificações'];

  return (
    <>
      <Header></Header>
      <Tab tabData={tabData}></Tab>
      <Footer></Footer>
    </>
  );
};

export default UserPage;
