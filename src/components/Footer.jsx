import React from 'react';

const Footer = () => {
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
              <li><a href="#casinos" className="hover:text-yellow-400">Top Casinos</a></li>
              <li><a href="#bonuses" className="hover:text-yellow-400">Best Bonuses</a></li>
              <li><a href="#games" className="hover:text-yellow-400">Casino Games</a></li>
              <li><a href="#guides" className="hover:text-yellow-400">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Responsible Gambling</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-yellow-400">Gambling Addiction Help</a></li>
              <li><a href="#" className="hover:text-yellow-400">Self-Assessment Tool</a></li>
              <li><a href="#" className="hover:text-yellow-400">Set Limits</a></li>
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