import React from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const CartModal = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/orders', {
        items: cart,
        total: cartTotal
      });
      alert('Order placed successfully! Order ID: ' + res.data._id);
      setIsCartOpen(false);
      // In a real app, you would also clear the cart here
    } catch (err) {
      console.error('Failed to place order', err);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div id="cart-modal" className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={() => setIsCartOpen(false)}>&times;</span>
        <h2>Your Shopping Cart</h2>
        <div id="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ddd' }}>
                <div className="cart-item-info">
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.name}</h4>
                  <p style={{ margin: 0 }}>€{item.price}</p>
                </div>
                <div className="cart-item-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => updateQuantity(item.name, -1)} style={{ padding: '0.3rem 0.6rem', border: '1px solid #ddd', background: 'white', cursor: 'pointer', borderRadius: '4px' }}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, 1)} style={{ padding: '0.3rem 0.6rem', border: '1px solid #ddd', background: 'white', cursor: 'pointer', borderRadius: '4px' }}>+</button>
                  <button onClick={() => removeFromCart(item.name)} className="remove-btn" style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '4px', cursor: 'pointer' }}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-total">
          <strong>Total: €<span id="cart-total">{cartTotal}</span></strong>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
