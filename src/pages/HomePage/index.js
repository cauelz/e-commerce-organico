import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/index';
import {carousel} from 'react-bootstrap';

const HomePage = () => {
    return (
        <>
        <Header></Header>
        <Carousel></Carousel>
        <Footer></Footer>
        </>
    );
}

export default HomePage;