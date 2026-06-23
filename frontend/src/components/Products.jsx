import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const { addToCart } = useCart();

  const featuredBestSellers = [
    {
      _id: 'chair-1',
      name: 'Cozy Lounge Chair',
      price: 499,
      category: 'leisure',
      image: 'chair-1.jpg',
      badge: 'Best Seller',
      rating: 4.8,
      description: 'Plush cushioning and a soft silhouette make this chair ideal for relaxing rooms and reading corners.',
      features: ['Soft foam seat', 'Warm fabric finish', 'Perfect for living rooms']
    },
    {
      _id: 'chair-2',
      name: 'Executive Work Chair',
      price: 699,
      category: 'work',
      image: 'chair-2.jpg',
      badge: 'Top Pick',
      rating: 4.9,
      description: 'Supportive lumbar comfort and a sleek design help you stay productive in style all day long.',
      features: ['Ergonomic back support', 'Adjustable height', 'Great for home offices']
    },
    {
      _id: 'chair-3',
      name: 'Luxury Accent Chair',
      price: 899,
      category: 'luxury',
      image: 'chair-3.jpg',
      badge: 'New Arrival',
      rating: 5,
      description: 'A statement chair with premium detailing that adds comfort and elegance to any modern space.',
      features: ['Premium upholstery', 'Bold designer look', 'Ideal for show-stopping interiors']
    }
  ];

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
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
        {featuredBestSellers.map(product => (
          <article className="chairbox" key={product._id} data-category={product.category}>
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
                <strong>€{product.price}</strong>
                <div className="product-actions">
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    <i className="fas fa-shopping-cart"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}

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
