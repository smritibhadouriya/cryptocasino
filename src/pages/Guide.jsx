import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeoHelmet from '../components/seo/SeoHelmet';

const guidesData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Top Strategies for Winning',
    description: 'Learn the best strategies to dominate your favorite games.',
    read_time: 5,
    tag: 'top',
    category: 'Strategy',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Ultimate Bonus Guide',
    description: 'Unlock hidden bonuses with these expert tips.',
    read_time: 3,
    tag: 'bonus',
    category: 'Bonuses',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Mastering Game Mechanics',
    description: 'A deep dive into advanced game mechanics for pros.',
    read_time: 7,
    tag: 'gameguide',
    category: 'Mechanics',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Top 10 Tips for Beginners',
    description: 'Get started with these essential tips for new players.',
    read_time: 4,
    tag: 'top',
    category: 'Beginner',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Optimizing Your Game Setup',
    description: 'Tips to enhance your gaming experience with the perfect setup.',
    read_time: 6,
    tag: 'bonus',
    category: 'Setup',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Secrets to Multiplayer Success',
    description: 'Master online play with these competitive multiplayer strategies.',
    read_time: 5,
    tag: 'gameguide',
    category: 'Multiplayer',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Guide to In-Game Economy',
    description: 'Learn how to manage resources and currency in your games.',
    read_time: 4,
    tag: 'gameguide',
    category: 'Economy',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Avoiding Common Pitfalls',
    description: 'Steer clear of mistakes that can set you back in your games.',
    read_time: 3,
    tag: 'top',
    category: 'Tips',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Advanced Combat Techniques',
    description: 'Master combat with these pro-level techniques.',
    read_time: 8,
    tag: 'gameguide',
    category: 'Combat',
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Maximizing XP Gains',
    description: 'Boost your experience points with these efficient strategies.',
    read_time: 4,
    tag: 'top',
    category: 'Progression',
  },
  {
    id: 11,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Crafting Legendary Items',
    description: 'Learn the art of crafting powerful items in your games.',
    read_time: 6,
    tag: 'gameguide',
    category: 'Crafting',
  },
  {
    id: 12,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Pro Tips for Competitive Play',
    description: 'Elevate your game with tips from top players.',
    read_time: 5,
    tag: 'bonus',
    category: 'Competitive',
  },
  {
    id: 13,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Unlocking Secret Levels',
    description: 'Discover hidden levels with these insider tips.',
    read_time: 3,
    tag: 'bonus',
    category: 'Secrets',
  },
  {
    id: 14,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Best Controller Settings',
    description: 'Optimize your controller for maximum performance.',
    read_time: 4,
    tag: 'gameguide',
    category: 'Setup',
  },
  {
    id: 15,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Team Coordination Strategies',
    description: 'Improve teamwork with these coordination tips.',
    read_time: 5,
    tag: 'gameguide',
    category: 'Teamwork',
  },
];

const Guide = () => {
  const topGuides = guidesData.filter((guide) => guide.tag === 'top');
  const bonusGuides = guidesData.filter((guide) => guide.tag === 'bonus');
  const gameGuides = guidesData.filter((guide) => guide.tag === 'gameguide');
  const navigate=useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array ensures it runs only once

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#1A1A2E] text-white">
   <SeoHelmet
  title='Casino & Game Guides - Tips, Strategies, and Bonuses'
  description='Explore top casino strategies, game guides, and bonus tips to improve your play and stay safe.'
   keywords={["casino", "online gambling", `casino guide`, "casino games", "bonuses","online games"]}
  href={`https://www.thecasinopapa/guide`}
/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Guides Hub
        </h1>
        <button onClick={() => navigate("/")} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </button>
        {/* Top Articles Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">🏆 Top Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topGuides.map((guide) => (
              <div key={guide.id} className="card p-6 flex flex-col items-center text-center bg-gray-900 bg-opacity-80 rounded-lg">
                <img src={guide.image} alt={guide.heading} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{guide.heading}</h3>
                <p className="text-gray-200 mb-4">{guide.description}</p>
                <p className="text-sm text-gray-400 mb-4">Read time: {guide.read_time} min</p>
                <Link
                  to={`/guide/${guide.id}`}
                  aria-label="Learn more about you favorite topic"
                  className="btn-primary w-full px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Guides Section */}
        <div className="py-16 bg-gray-900 bg-opacity-40">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">💰 Bonus Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonusGuides.map((guide) => (
              <div key={guide.id} className="card p-6 flex flex-col bg-gray-900 bg-opacity-80 rounded-lg">
                <img src={guide.image} alt={guide.heading} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{guide.heading}</h3>
                <p className="text-gray-200 text-sm mb-4">{guide.description}</p>
                <p className="text-xs text-gray-400 mb-4">Read time: {guide.read_time} min</p>
                <Link
                  to={`/guide/${guide.id}`}
                  aria-label="way to learn more about your favorite topic"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold text-left"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Game Guides Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">🎮 Game Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameGuides.map((guide) => (
              <div key={guide.id} className="card p-6 bg-gray-900 bg-opacity-80 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{guide.heading}</h3>
                <img src={guide.image} alt={guide.heading} className="w-full h-48 object-cover rounded-lg mb-4 opacity-90" />
                <p className="text-gray-200 mb-4">{guide.description}</p>
                <p className="text-sm text-gray-400 mb-4">Read time: {guide.read_time} min</p>
                <Link
                  to={`/guide/${guide.id}`}
                  aria-label="way to learn more about your selected topic"
                  className="btn-primary w-full px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Read Guide
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;