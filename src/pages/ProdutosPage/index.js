import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { listProducts } from '../../actions/productActions';

const ProdutosPage = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <>
      <Container>
        <hr></hr>
        <h1>Últimos Produtos</h1>

        {loading ? (<Loader />)
          : error ?
            (<Message variant='danger'>{error}</Message>)
            : (
              <Row>
                {products.map((product) => {
                  return (
                    <Col sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  )
                })}
              </Row>
            )}
      </Container>
    </>
  )
}

export default ProdutosPage;
