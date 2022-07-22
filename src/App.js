import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/views/Header/Header';
import Products from './components/views/Products/Products';
import Product from './components/features/Product/Product';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </div>
    );
  }
};

export default App;
