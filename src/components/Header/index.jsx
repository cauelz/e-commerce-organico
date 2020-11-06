import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './base.css'

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light nav-background-white">
                <button class="navbar-toggler main-color" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a href="https://www.google.com.br/" class="navbar-brand nav-brand-title">orgâni.co</a>

                <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.google.com.br/">Início</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/https://www.google.com.br/">Quem Somo</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="https://www.google.com.br/" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Produtos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="https://www.google.com.br/">Frutas</a>
                                <a class="dropdown-item" href="https://www.google.com.br/">Verduras</a>
                                <a class="dropdown-item" href="https://www.google.com.br/">Legumes</a>
                                <a class="dropdown-item" href="https://www.google.com.br/">Carnes</a>
                                <a class="dropdown-item" href="https://www.google.com.br/">Temperos e Chás</a>
                                <a class="dropdown-item" href="https://www.google.com.br/">Laticínios</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="https://www.google.com.br/">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.google.com.br/">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.google.com.br/">Dúvidas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.google.com.br/">Contato</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0 pr-4">
                        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i
                                class="fas fa-search"></i></button>
                    </form>
                </div>

                <div class="d-flex">
                    <div class="mx-2 text-center">
                        <a href="https://www.google.com.br/" class="btn btn-outline-light btn-lg" role="button" aria-pressed="true" data-toggle="modal" data-target="#exampleModal2" ><i
                                class="far fa-comments nav-fontawesome-icon"></i></a>
                        <span class="d-block">Atendimento</span>
                    </div>
                    <div class="mx-2 text-center">
                        <a href="https://www.google.com.br/" class="btn btn-outline-light btn-lg" role="button" aria-pressed="true"><i class="fas fa-shopping-cart nav-fontawesome-icon pr-2"></i></a>
                        <span class="d-block">Carrinho</span>
                    </div>
                    <div class="mx-2 text-center">
                        <a href="https://www.google.com.br/" class="btn btn-outline-light btn-lg" role="button" aria-pressed="true" data-toggle="modal" data-target="#exampleModal" ><i
                                class="fas fa-user nav-fontawesome-icon"></i></a>
                        <span class="d-block">Minha Conta</span>
                    </div>
                </div>
            </nav>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Faça seu Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="login-email">E-mail</label>
                                <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label for="login-senha">Password</label>
                                <input type="password" class="form-control" id="login-senha" />
                            </div>
                            <a role="button" class="btn btn-link" href="https://www.google.com.br/">Esqueci minha senha!</a>
                            <a href="https://www.google.com.br/" role="button" class="btn btn-link">Cadastre-se</a>
                        </div>
                        <div class="modal-footer">
                            <a href="https://www.google.com.br/" class="btn btn-outline-danger" tabindex="-1" role="button" aria-disabled="true">Sair</a>
                            <a href="https://www.google.com.br/" class="btn btn-outline-success" tabindex="-1" role="button" aria-disabled="true">Entrar</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;