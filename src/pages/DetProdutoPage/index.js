import React from "react";
import Pitaya from "../../assets/pitaya.jpg";
import "../DetProdutoPage/style.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

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
            <section>
                <div className="produto">
                <Image src={Pitaya} fluid/>
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
        </>
    );
};

export default DetProduto;