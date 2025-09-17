import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router is used for navigation
import { casinoData } from '../data/CasinoData';
const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 bg-gray-900 bg-opacity-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Trending Bonuses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {casinoData.map((casino) => (
            <div
              key={casino.id}
              className="card p-6 text-center bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between h-80 w-full"
            >
              <img
                src={casino.image}
                alt={`${casino.name} logo`}
                className="w-16 h-16 mx-auto mb-4 object-cover rounded-full"/>
              <h3 className="text-lg font-semibold mb-2 text-white">{casino.name}</h3>
              <h4 className="text-md font-medium mb-2 text-yellow-400">{casino.bonuses[0].title}</h4>
              <p className="text-gray-200  flex-grow">{casino.bonuses[0].amount}</p>
              <Link to={`/casino/${casino.id}`}>
                <button className="btn-primary w-full bg-yellow-500 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-600 transition">
                  Claim Bonus
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;