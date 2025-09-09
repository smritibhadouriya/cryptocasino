import React from 'react';
import { casinoData } from '../data/CasinoData';

const Casinos = ({ casinos = casinoData }) => {
  return (
    <section id="casinos" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Top Casinos of the Month</h2>
        <div className="space-y-6" id="casino-list">
          {casinos.length > 0 ? (
            casinos.map((casino) => (
              <div
                key={casino.id}
                className={`card p-6 ${casino.isEditorsChoice ? 'border-2 border-yellow-400' : ''} relative bg-gray-800 rounded-lg shadow-lg`}
              >
                {casino.isEditorsChoice && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-2 rounded-bl-lg font-semibold">
                    Editor's Choice
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">
                      {casino.isEditorsChoice ? '👑' : casino.id === 2 ? '💎' : casino.id === 3 ? '🎯' : '🎰'}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{casino.name}</h3>
                      <div className="badge text-xs px-2 py-1 bg-gray-700 text-yellow-400 rounded">
                        {casino.badge}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-semibold">{casino.bonus}</div>
                    <div className="text-sm text-gray-200">{casino.bonusDesc}</div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    {casino.paymentMethods.map((method, index) => (
                      <span key={index} className="text-2xl" title={method.name}>
                        {method.icon}
                      </span>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="star-rating text-lg text-yellow-400">{casino.rating} ★</div>
                    <div className="text-sm text-gray-200">({casino.reviews} reviews)</div>
                  </div>
                  <div className="text-center">
                    <button className="btn-primary w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition font-semibold">
                      Visit Casino
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No casinos match the selected filter.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Casinos;