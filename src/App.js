import React from 'react';
import Routes from './routes';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes />
      <Footer></Footer>
    </div>
  );
}

export default App;
