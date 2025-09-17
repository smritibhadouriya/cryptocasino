import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: '#casinos', label: 'Top Casinos' },
    { href: '#bonuses', label: 'Bonuses' },
    { href: '#games', label: 'Games' },
    { href: '#guides', label: 'Guides' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const navbarHeight = document.querySelector('nav').offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.sectionId) {
      // Delay scroll to ensure DOM is ready after navigation
      setTimeout(() => scrollToSection(location.state.sectionId), 0);
    }
  }, [location]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');

    if (location.pathname === '/') {
      // On homepage, scroll directly
      scrollToSection(sectionId);
    } else {
      // On other pages, navigate to homepage with sectionId in state
      navigate('/', { state: { sectionId } });
    }
  };

  return (
    <footer className="bg-gray-900 bg-opacity-60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-4">🎰 Casino Guru</div>
            <p className="text-gray-200">Your trusted guide to the best online casinos. Play responsibly.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-yellow-400"
                    aria-label="footer links"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/privacy" className="hover:text-yellow-400" aria-label="Privacy Policy">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-400" aria-label="Terms and Conditions">Terms & Conditions</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400" aria-label="Contact Us">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Responsible Gambling</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-yellow-400" aria-label="Gambling Addiction Help">Gambling Addiction Help</a></li>
              <li><a href="#" className="hover:text-yellow-400" aria-label="Self-Assessment Tool">Self-Assessment Tool</a></li>
              <li><a href="#" className="hover:text-yellow-400" aria-label="Set Limits">Set Limits</a></li>
              <li className="text-sm">Helpline: 1800-XXX-XXXX</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; 2025 Casino Guru. All rights reserved. Gamble responsibly. 18+</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;