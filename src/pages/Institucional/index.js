import React from 'react';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
/* import FormControl from 'react-bootstrap/FormControl';*/
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Institucional/style.css'

const InstitucionalPage = () => {
    return (
        <>
            <section className="titulo-institucional">
                <div>
                    <h2>Nós somos ORGÂNI.CO</h2>
                </div>
            </section>
            <section className="texto-institucional">
                <div>
                    <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                    </p>
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    </p>
                    <p>
                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                    </p>
                    <p>
                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
                    </p>
                </div>
            </section>
            <section className="news-institucional">
                <div>
                    <h3>Fique por dentro das novidades!</h3>
                </div>
            </section>
            <section className="news-form">
                <div>
                    <Form>
                        <Row>
                            <Col className="nome-news">
                                <Form.Control placeholder="Nome" />
                            </Col>
                            <Col className="email-news">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="success" id="btn-news">Cadastrar</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
        </>
    );
}

export default InstitucionalPage;