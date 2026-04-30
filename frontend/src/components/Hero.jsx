import React from 'react';

const Hero = () => {
  return (
    <header id="home">
      <div className="el-1">
        <h1>We design and build better chairs, for a better life</h1>
        <p>In a small shop in the heart of Lisbon, we spend our days relentlessly perfecting the chair. The result is a perfect blend of beauty and comfort, that will have a lasting impact on your health.</p>
        <div className="a1">
          <a href="#products">shop chairs</a>
        </div>
      </div>
      <div>
        <img src="/hero.jpg" alt="chair" width="400" height="440" />
      </div>
    </header>
  );
};

export default Hero;
