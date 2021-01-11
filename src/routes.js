import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from './pages/UserPage';
import CadastroPage from './pages/CadastroPage';
import AtendimentoPage from './pages/AtendimentoPage';
import PedidoPage from './pages/PedidoPage';
import NotificacoesPage from './pages/NotificacoesPage';
import AddCreditCard from './components/Forms/AddCreditCard';
import BlogPage from "./pages/Blog";
import DetProduto from "./pages/DetProdutoPage";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/produto" component={DetProduto}/>
        <Route exact path="/user/cadastro" component={CadastroPage}/>
        <Route exact path="/user/cartao" component={AddCreditCard}/>
        <Route exact path="/user/pedidos" component={PedidoPage}/>
        <Route exact path="/user/atendimento" component={AtendimentoPage}/>
        <Route exact path="/user/notificacoes" component={NotificacoesPage}/>
        <Route exact path="/user" component={UserPage}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
