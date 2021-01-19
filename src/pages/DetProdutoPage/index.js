import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
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
import { Row, Col, ListGroup } from 'react-bootstrap';
import { listProductDetails } from '../../actions/productActions';
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import "../DetProdutoPage/style.css";

const DetProduto = ({ history, match }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);

    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/carrinho/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                    <section className="link-menu">
                        <Breadcrumb>
                            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                {product.category}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="/produtos/:id" active>{product.name}</Breadcrumb.Item>
                        </Breadcrumb>
                    </section>
                    <section id="produto">
                        <div id="detalhe-produto">
                            <Image src={product.image} id="img-produto" alt={product.name} />
                            <Col md={2}>
                                <h4>{product.name}</h4>
                                <p id="sku">cód: 19373</p>
                                <h2>R${product.price}</h2>
                                <div id="sku-form">
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>
                                                    <strong>R${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col>
                                                        <Form.Control
                                                            as='select'
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                        >
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}

                                        <ListGroup.Item>
                                            <Button
                                                onClick={addToCartHandler}
                                                className='btn-block'
                                                variant='success'
                                                type='button'
                                                disabled={product.countInStock === 0}
                                            >
                                                Add To Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Col>
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

            )}

        </>
    );
};

export default DetProduto;