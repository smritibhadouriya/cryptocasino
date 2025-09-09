import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#casinos', label: 'Top Casinos' },
    { href: '#bonuses', label: 'Bonuses' },
    { href: '#games', label: 'Games' },
    { href: '#guides', label: 'Guides' },
    { href: '#reviews', label: 'Reviews' }
  ];

  const scrollToSection = (sectionId, isSamePage = true) => {
    if (isSamePage) {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href;
    
    if (location.pathname === '/') {
      // On homepage, use smooth scrolling
      scrollToSection(sectionId);
    } else {
      // On other pages, navigate to homepage with section hash
      navigate(`/${sectionId}`);
      // Trigger scroll after navigation (use setTimeout to ensure DOM is ready)
      setTimeout(() => scrollToSection(sectionId, false), 0);
    }
  };

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-yellow-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-yellow-400 cursor-pointer" onClick={() => navigate('/')}>
              Crypto Casino
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;