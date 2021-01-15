import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CarouselDefault from './components/Carousel/Carousel';
import HomePage from "./pages/HomePage";
import UserPage from './pages/UserPage';
import CadastroPage from './pages/CadastroPage';
import AtendimentoPage from './pages/AtendimentoPage';
import PedidoPage from './pages/PedidoPage';
import NotificacoesPage from './pages/NotificacoesPage';
import AddCreditCard from './components/Forms/AddCreditCard';
import BlogPage from "./pages/Blog";
import ProdutosPage from './pages/ProdutosPage';


const Routes = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <CarouselDefault></CarouselDefault>
      <Switch>
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/produtos" component={ProdutosPage} />
        <Route exact path="/user/cadastro" component={CadastroPage} />
        <Route exact path="/user/cartao" component={AddCreditCard} />
        <Route exact path="/user/pedidos" component={PedidoPage} />
        <Route exact path="/user/atendimento" component={AtendimentoPage} />
        <Route exact path="/user/notificacoes" component={NotificacoesPage} />
        <Route exact path="/user" component={UserPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Routes;
