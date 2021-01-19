import React from "react";
import { Carousel, } from 'react-bootstrap';
import './Carousel.css'

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item className="height-300">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1552670070-7c3a4ffba6a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Seja Saudável, sua vida vale muito.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="height-300">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1610439901577-cf832e5c2320?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Aqui na Orgâni.co, você adquire os melhores produtos.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="height-300">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1561136594-7f68413baa99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Third slide "
        />

        <Carousel.Caption>
          <h3>Nossos fornecedores são todos aprovados pela ANVISA</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
