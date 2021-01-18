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
import Form from 'react-bootstrap/Form';
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
            <section className="" id="produto">
                <div id="detalhe-produto">
                    <Image src={product.image} id="img-produto" alt={product.name} />
                    <div>
                        <h4>{product.name}</h4>
                        <p id="sku">cód: 19373</p>
                        <h3>R${product.price}</h3>
                        <div id="sku-form">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Quantidade</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Calcule seu frete</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="CEP"
                                        name="zip"
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                        <Button variant="success">Adicionar ao carrinho</Button>
                    </div>
                </div>
            </section>
            <section>
                <div id="descricao-produto">
                    <h6>DESCRIÇÃO</h6>
                    <p>{product.description}</p>
                </div>
            </section>
            <section className="destaques">
                <div className="titulo-destaques">
                    <h2>COMPLETE SUAS COMPRAS</h2>
                </div>
                <div className="container-fluid d-flex flex-wrap mx-0 justify-content-center">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={Frutas} />
                            <Card.Body>
                                <Card.Title>FRUTAS</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Ver mais produtos</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Legumes} />
                            <Card.Body>
                                <Card.Title>LEGUMES</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Ver mais produtos</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Verduras} />
                            <Card.Body>
                                <Card.Title>VERDURAS</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Ver mais produtos</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Tuberculos} />
                            <Card.Body>
                                <Card.Title>TUBÉRCULOS</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Ver mais produtos</Button>
                        </Card>
                    </CardDeck>
                </div>
            </section>
        </>
    );
};

export default DetProduto;