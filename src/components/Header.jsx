import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="floating absolute top-10 left-20 text-5xl">🎲</div>
        <div className="floating absolute top-20 right-20 text-4xl opacity-100" style={{ animationDelay: '-2s' }}>♠️</div>
        <div className="floating absolute bottom-20 left-1/4 text-5xl" style={{ animationDelay: '-4s' }}>🃏</div>
        <div className="spinning absolute top-1/2 right-1/3 text-6xl">🎰</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Find the Best Online Casinos in 2025
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Discover Trusted Casinos, Exclusive Bonuses, and Exciting Games.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('casinos')}
            className="btn-primary"
          >
            🏆 Top Casinos
          </button>
          <button
            onClick={() => scrollToSection('bonuses')}
            className="btn-secondary"
          >
            💰 Claim Bonus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;