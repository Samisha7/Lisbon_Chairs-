import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Navbar />
        <div>
          <Hero />
          <Features />
          <Products />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
