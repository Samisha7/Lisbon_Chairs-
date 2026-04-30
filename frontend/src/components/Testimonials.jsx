import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: "The quality of these chairs exceeded my expectations. The attention to detail and comfort level is unmatched. My back pain has significantly improved since switching to Executive Pro!",
      author: "Carlos Mendes",
      role: "CEO, Tech Startup",
      rating: 4
    },
    {
      text: "We furnished our entire office with Lisbon Chair Co. chairs and couldn't be happier. The team was helpful in guiding our choices and delivery was seamless.",
      author: "Marina Silva",
      role: "Office Manager",
      rating: 5
    },
    {
      text: "The Terrace Lounger chairs have transformed our outdoor space. They're stylish, comfortable, and have weathered perfectly through all seasons.",
      author: "João & Ana Costa",
      role: "Homeowners",
      rating: 4.5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="testimonial-image">
          <img src="/customers.jpg" alt="customers" width="260" height="200" />
        </div>
        <div className="testimonial-content">
          <h3>"We couldn't live without these chairs anymore"</h3>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat at, nesciunt quia cum minima ipsum culpa totam sapiente recusandae earum debitis doloribus in quasi voluptatibus!</em></p>
          <p>&mdash; Mary and Sarah Johnson</p>
        </div>
      </section>

      <section id="testimonials-carousel" className="testimonials-carousel">
        <h2>What Our Customers Say</h2>
        <div className="carousel-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {slides.map((slide, index) => (
            <div key={index} className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`} style={{ display: index === currentSlide ? 'block' : 'none', textAlign: 'center', padding: '2rem' }}>
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(Math.floor(slide.rating))].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  {slide.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                </div>
                <p>"{slide.text}"</p>
                <div className="testimonial-author">
                  <strong>{slide.author}</strong><br />
                  <span>{slide.role}</span>
                </div>
              </div>
            </div>
          ))}
          <button className="carousel-prev" onClick={prevSlide} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}><i className="fas fa-chevron-left"></i></button>
          <button className="carousel-next" onClick={nextSlide} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}><i className="fas fa-chevron-right"></i></button>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
