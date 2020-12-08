import React from 'react';
import Routes from './routes';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CarouselDefault from './components/Carousel/index';


function App() {
  return (
    <div>
      <Header></Header>
      <CarouselDefault></CarouselDefault>
      <Routes />
      <Footer></Footer>
    </div>
  );
}

export default App;
