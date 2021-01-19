import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Alecrim from '../../assets/alecrim.jpg';
import AlfaceCrespa from '../../assets/alface-crespa.jpg';
import BananaPrata from '../../assets/banana-prata.jpg';
import BatataDoce from '../../assets/batata-doce.jpg';
import Cenoura from '../../assets/cenoura.jpg';
import Maca from '../../assets/maca.jpg';
import MangaPalmer from '../../assets/manga-palmer.jpeg';
import Morango from '../../assets/morango.jpg';
import '../HomePage/style.css'

const HomePage = () => {
    return (
        <>
            <section className="prateleira-1">
                <div className="titulo-destaques">
                    <h2>DESTAQUES</h2>
                </div>
                <div className="container-fluid d-flex flex-wrap mx-0 justify-content-center">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={Alecrim} />
                            <Card.Body>
                                <Card.Title>Alecrim</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={BananaPrata} />
                            <Card.Body>
                                <Card.Title>Banana Prata</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={MangaPalmer} />
                            <Card.Body>
                                <Card.Title>Manga Palmer</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={BatataDoce} />
                            <Card.Body>
                                <Card.Title>Batata Doce</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                    </CardDeck>
                </div>
            </section>
            <section>
                <div className="titulo-blog">
                    <h2>BLOG ORGÂNI.CO</h2>
                </div>
                <div id="blog-cards">
                    <CardDeck>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b625f0d96d455ef934bf48c/1561745268571-Y5NCFEK8RDPMDQT7VLEC/ke17ZwdGBToddI8pDm48kKJv-aO3J5juaDXx2EYMqp1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyw47c-nJBBHNZ4h7h4Tq8iVZGn8qfHCFTN-PhSu7i9yVpKEAzGHcwgiLiG1ignBos/001.jpg?format=750w" class="card-img-top" alt="Comida orgânica tem sabor?" />
                            <Card.Body>
                                <Card.Title>Comida orgânica tem mesmo sabor?</Card.Title>
                                <Card.Text className="card-text">
                                    Se esse boato te espanta toda vez que  você faz compras no mercado, não tema: estamos aqui para solucionar esse  mistério! Continue lendo e  descubra, de uma vez por todas, que a comida orgânica tem sabor!
                                    </Card.Text>
                            </Card.Body>
                            <Button href="https://www.lemanjue.com/blog/2019/6/28/comida-orgnica-tem-sabor" id="btnbutton1">Ver Mais</Button>
                        </Card>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b625f0d96d455ef934bf48c/1561778061718-APOEPQ4K0W1CZ1UIEXMG/ke17ZwdGBToddI8pDm48kKJv-aO3J5juaDXx2EYMqp1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyw47c-nJBBHNZ4h7h4Tq8iVZGn8qfHCFTN-PhSu7i9yVpKEAzGHcwgiLiG1ignBos/5.jpg" class="card-img-top" alt="Conheça 6 benefícios da comida orgânica" />
                            <Card.Body>
                                <Card.Title>Conheça 6 benefícios da comida orgânica</Card.Title>
                                <Card.Text className="card-text">
                                    As técnicas utilizadas na produção de grãos, vegetais, carnes, leite e até mesmo ovos orgânicos têm o objetivo de manter sua qualidade e respeitar o planeta. É por isso que esse tipo de alimento é uma tendência cada vez mais forte no mundo todo.
                                    </Card.Text>
                            </Card.Body>
                            <Button href="https://blog.livup.com.br/conheca-6-beneficios-da-comida-organica/" id="btnbutton1">Ver Mais</Button>
                        </Card>
                    </CardDeck>
                </div>
            </section>
            <section className="prateleira-2">
                <div className="titulo-destaques">
                    <h2>MAIS PRODUTOS</h2>
                </div>
                <div className="container-fluid d-flex flex-wrap mx-0 justify-content-center">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={Morango} />
                            <Card.Body>
                                <Card.Title>Morango</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={AlfaceCrespa} />
                            <Card.Body>
                                <Card.Title>Alface Crespa</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Maca} />
                            <Card.Body>
                                <Card.Title>Maça Fuji</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Cenoura} />
                            <Card.Body>
                                <Card.Title>Cenoura</Card.Title>
                            </Card.Body>
                            <Button variant="success" id="button-add">Adicionar ao carrinho</Button>
                        </Card>
                    </CardDeck>
                </div>
            </section>
            <section>
                <div className="agradecimento">
                    <h4>Somos Orgâni.co</h4>
                    <p>Obrigado por comprar produtos Orgâni.co. Além de ajudar o planeta, você ainda desfruta dos melhores sabores. Nossos produtores são de fazendas familiares homologadas. Seguimos um alto padrão de qualidade. Você merece o melhor alimento.</p>
                </div>
            </section>
        </>
    );
}

export default HomePage;
