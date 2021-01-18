import React from "react";
import Pitaya from "../../assets/pitaya.jpg";
import Frutas from "../../assets/frutas.jpg";
import Legumes from "../../assets/legumes.png";
import Verduras from "../../assets/verduras.jpg";
import Tuberculos from "../../assets/tuberculos.jpg";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
import "../DetProdutoPage/style.css";

const DetProduto = () => {
    return (
        <>
            <section className="link-menu">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Frutas
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Pitaya</Breadcrumb.Item>
                </Breadcrumb>
            </section>
            <section className="produto">
                <div>
                    <Image src={Pitaya} fluid />
                    <div>
                        <h4>Pitaya Branca</h4>
                        <p id="sku">cód: 19373</p>
                        <h3>R$ 30   </h3>
                        <Button variant="success">Adicionar ao carrinho</Button>
                    </div>
                </div>
                <div class="descricao-produto">
                    <h6>DESCRIÇÃO</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex amet vel, voluptates vero repudiandae a, optio ratione mollitia qui hic fuga ullam placeat suscipit alias, libero fugiat harum provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex amet vel, voluptates vero repudiandae a, optio ratione mollitia qui hic fuga ullam placeat suscipit alias, libero fugiat harum provident.</p>
                </div>
            </section>
            <section className="destaques">
                <div className="titulo-destaques">
                    <h2>COMPLETE SEU CARRINHO</h2>
                </div>
                <div className="container-fluid d-flex flex-wrap mx-0 justify-content-center">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={Frutas} />
                            <Card.Body>
                                <Card.Title>FRUTAS</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Legumes} />
                            <Card.Body>
                                <Card.Title>LEGUMES</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Verduras} />
                            <Card.Body>
                                <Card.Title>VERDURAS</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Tuberculos} />
                            <Card.Body>
                                <Card.Title>TUBÉRCULOS</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                    </CardDeck>
                </div>
            </section>
        </>
    );
};

export default DetProduto;