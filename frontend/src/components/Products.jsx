import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <>
      <div className="products-header">
        <h2 id="products">Our bestselling chairs</h2>
        <div className="filter-buttons">
          {['all', 'leisure', 'work', 'luxury', 'outdoor', 'dining'].map(f => (
            <button 
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`} 
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <section className="products-grid">
        {filteredProducts.map(product => (
          <div className="chairbox" key={product._id} data-category={product.category}>
            {product.badge && <div className="product-badge">{product.badge}</div>}
            <div className="product-image">
              <img src={`/${product.image}`} alt={product.name} />
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <div className="rating">
                {[...Array(Math.floor(product.rating))].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                {product.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                <span>({product.rating})</span>
              </div>
              <ul>
                {product.features.map((feature, i) => (
                  <li key={i}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
              <div className="chairprice">
                <strong>{product.price}€ </strong>
                <div className="product-actions">
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    <i className="fas fa-shopping-cart"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
