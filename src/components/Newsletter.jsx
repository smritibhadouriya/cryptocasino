import React from 'react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 text-center border-2 border-yellow-400">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Get Exclusive Casino Deals</h2>
          <p className="text-gray-200 mb-6">Subscribe to receive the latest bonuses, promotions, and casino news directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;