import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Visit Our Lisbon Showroom</h3>
          <p><i className="fas fa-map-marker-alt"></i> Rua das Flores 123, 1200-123 Lisboa, Portugal</p>
          <p><i className="fas fa-phone"></i> +351 21 123 4567</p>
          <p><i className="fas fa-envelope"></i> hello@lisbonchairco.com</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
