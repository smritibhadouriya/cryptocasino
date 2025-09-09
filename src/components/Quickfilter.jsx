import React, { useState } from 'react';

const QuickFilters = ({ onFilterChange, activeFilter })  => {
      const handleFilterClick = (type) => {
        onFilterChange(type);
        const element = document.getElementById('casinos');
        if (element) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth',
          });
        }
      };

      return (
        <section className="py-8 bg-gray-900 bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { type: 'all', label: 'All Casinos'},
                { type: 'bonuses', label: 'Best Bonuses'},
                { type: 'new', label: 'New Casinos'},
                { type: 'trusted', label: 'Trusted & Licensed'},
                { type: 'rated', label: 'Top Rated' },
              ].map(({ type, label, icon }) => (
                <button
                  key={type}
                  onClick={() => handleFilterClick(type)}
                  className={`px-4 py-2 rounded border-2 font-semibold ${
                    activeFilter === type
                      ? 'bg-yellow-500 text-gray-900 border-yellow-500'
                      : 'bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition'
                  }`}
                >
                   {label}
                </button>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default QuickFilters;