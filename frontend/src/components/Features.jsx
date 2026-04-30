import React from 'react';

const Features = () => {
  return (
    <>
      <div id="about">
        <h2>What makes our chairs special</h2>
      </div>
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-microscope"></i>
          </div>
          <h4>Science meets design</h4>
          <p>Our chairs are engineered with ergonomic precision, combining cutting-edge research with timeless aesthetics for optimal support and style.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-couch"></i>
          </div>
          <h4>Maximal comfort</h4>
          <p>Experience unparalleled comfort with our premium materials and thoughtful design that supports your body through long hours of use.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-leaf"></i>
          </div>
          <h4>Ethical and sustainable</h4>
          <p>Committed to environmental responsibility, we use sustainable materials and ethical manufacturing practices in every chair we create.</p>
        </div>
      </section>
    </>
  );
};

export default Features;
