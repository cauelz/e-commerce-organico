import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CarouselDefault from './components/Carousel/Carousel';
import HomePage from "./pages/HomePage";
import UserPage from './pages/UserPage';
import CadastroPage from './pages/CadastroPage';
import AtendimentoPage from './pages/AtendimentoPage';
import NotificacoesPage from './pages/NotificacoesPage';
import AddCreditCard from './components/Forms/AddCreditCard';
import BlogPage from "./pages/Blog";
import DetProduto from "./pages/DetProdutoPage";
import ProdutosPage from './pages/ProdutosPage';
import CarrinhoPage from './pages/CarrinhoPage/CarrinhoPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from './pages/OrderPage';
import InstitucionalPage from './pages/Institucional'


const Routes = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <CarouselDefault></CarouselDefault>
      <main className='px-3 m-3'>
        <Switch>
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/institucional" component={InstitucionalPage} />
          <Route exact path="/produtos" component={ProdutosPage} />
          <Route exact path="/produtos/:id" component={DetProduto} />
          <Route exact path="/carrinho/:id?" component={CarrinhoPage} />
          <Route exact path="/shipping" component={ShippingPage} />
          <Route exact path="/payment" component={PaymentPage} />
          <Route exact path="/placeorder" component={PlaceOrderPage} />
          <Route exact path="/order/:id" component={OrderPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/user/cadastro" component={CadastroPage} />
          <Route exact path="/user/cartao" component={AddCreditCard} />
          <Route exact path="/user/atendimento" component={AtendimentoPage} />
          <Route exact path="/user/notificacoes" component={NotificacoesPage} />
          <Route exact path="/user" component={UserPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Routes;
