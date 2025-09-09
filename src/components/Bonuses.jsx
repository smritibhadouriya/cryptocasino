import React from 'react';

const bonusesData = [
  {
    icon: '🎁',
    title: 'No Deposit Bonus',
    description: 'Get ₹1,000 free without any deposit required',
  },
  {
    icon: '🎰',
    title: 'Free Spins Offer',
    description: '500 free spins on popular slot games',
  },
  {
    icon: '💸',
    title: 'Cashback Bonus',
    description: 'Get 25% cashback on all losses',
  },
  {
    icon: '👑',
    title: 'VIP Bonus Deals',
    description: 'Exclusive bonuses for VIP members',
  }
];

const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 bg-gray-900 bg-opacity-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400"> Trending Bonuses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonusesData.map((bonus, index) => (
            <div
              key={index}
              className="card p-6 text-center bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between h-64 w-full"
            >
              <div className="text-4xl mb-4">{bonus.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{bonus.title}</h3>
              <p className="text-gray-200 mb-4 flex-grow">{bonus.description}</p>
              <button className="btn-primary w-full bg-yellow-500 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-600 transition">
                Claim Bonus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;