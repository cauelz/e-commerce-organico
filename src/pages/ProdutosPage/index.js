import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import axios from 'axios';

const ProdutosPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }

    fetchProducts()

  }, [])

  return (
    <>
      <Container>
        <hr></hr>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default ProdutosPage;
