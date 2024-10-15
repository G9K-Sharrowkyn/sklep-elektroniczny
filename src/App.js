import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar cart={cart || []} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/category/:categoryName" element={<CategoryPage addToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
