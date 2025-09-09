import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { casinoData } from '../data/CasinoData';

const FeaturedCasinos = () => {
  const navigate = useNavigate();
  
  const featuredCasinos = casinoData
    .filter((casino) => casino.featured)
    .slice(0, 3);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400"> Featured Casinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{featuredCasinos.map((casino) => (
  <div
    key={casino.id}
    className="card bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition p-6 flex flex-col"
    onClick={() => navigate(`/casino/${casino.id}`)}
  >
    {/* Top Row: Image + Details */}
    <div className="flex flex-col md:flex-row w-full">
      {/* Left: Image */}
      <div className="md:w-1/3 w-full flex justify-center md:justify-start">
        <img
          src={casino.image}
          alt={casino.name}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right: Details */}
      <div className="md:w-2/3 w-full md:pl-6 mt-4 md:mt-0">
        <h3 className="text-xl font-semibold mb-2 text-white">{casino.name}</h3>
        <div className=" mb-2 text-gray-300">
          {`${casino.bonus} ${casino.bonusDesc}`}
        </div>
      <div className="star-rating text-yellow-500"> {casino.rating} ({(casino.rating.length * 0.9).toFixed(1)}/5) </div>
       <div className="reviews mb-2 text-gray-400">{casino.reviews} Reviews</div>
      </div>
    </div>

    {/* Bottom Row: Buttons below both */}
    <div className="flex gap-4 w-full mt-6">
      <Link
        className="flex-1 bg-yellow-500 text-black font-semibold py-2 rounded text-center hover:bg-yellow-600"
        to={`/casino/${casino.id}`}
      >
        Details
      </Link>
      <button className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700">
        Visit
      </button>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedCasinos;
