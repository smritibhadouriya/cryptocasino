import React from 'react';
import { Link } from 'react-router-dom';

const guidesData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Top Strategies for Winning',
    description: 'Learn the best strategies to dominate your favorite games.',
    read_time: 5,
    tag: 'top',
    category: 'Strategy',
    emoji: '🏆',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Top 10 Tips for Beginners',
    description: 'Get started with these essential tips for new players.',
    read_time: 4,
    tag: 'top',
    category: 'Beginner',
    emoji: '🌟',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Avoiding Common Pitfalls',
    description: 'Steer clear of mistakes that can set you back in your games.',
    read_time: 3,
    tag: 'top',
    category: 'Tips',
    emoji: '⚠️',
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Maximizing XP Gains',
    description: 'Boost your experience points with these efficient strategies.',
    read_time: 4,
    tag: 'top',
    category: 'Progression',
    emoji: '📈',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Ultimate Bonus Guide',
    description: 'Unlock hidden bonuses with these expert tips.',
    read_time: 3,
    tag: 'bonus',
    category: 'Bonuses',
    emoji: '💰',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Optimizing Your Game Setup',
    description: 'Tips to enhance your gaming experience with the perfect setup.',
    read_time: 6,
    tag: 'bonus',
    category: 'Setup',
    emoji: '⚙️',
  },
  {
    id: 12,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Pro Tips for Competitive Play',
    description: 'Elevate your game with tips from top players.',
    read_time: 5,
    tag: 'bonus',
    category: 'Competitive',
    emoji: '🎮',
  },
  {
    id: 13,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Unlocking Secret Levels',
    description: 'Discover hidden levels with these insider tips.',
    read_time: 3,
    tag: 'bonus',
    category: 'Secrets',
    emoji: '🔓',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Mastering Game Mechanics',
    description: 'A deep dive into advanced game mechanics for pros.',
    read_time: 7,
    tag: 'gameguide',
    category: 'Mechanics',
    emoji: '🛠️',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Secrets to Multiplayer Success',
    description: 'Master online play with these competitive multiplayer strategies.',
    read_time: 5,
    tag: 'gameguide',
    category: 'Multiplayer',
    emoji: '👥',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Guide to In-Game Economy',
    description: 'Learn how to manage resources and currency in your games.',
    read_time: 4,
    tag: 'gameguide',
    category: 'Economy',
    emoji: '💸',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Advanced Combat Techniques',
    description: 'Master combat with these pro-level techniques.',
    read_time: 8,
    tag: 'gameguide',
    category: 'Combat',
    emoji: '⚔️',
  },
  {
    id: 11,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Crafting Legendary Items',
    description: 'Learn the art of crafting powerful items in your games.',
    read_time: 6,
    tag: 'gameguide',
    category: 'Crafting',
    emoji: '🔨',
  },
  {
    id: 14,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Best Controller Settings',
    description: 'Optimize your controller for maximum performance.',
    read_time: 4,
    tag: 'gameguide',
    category: 'Setup',
    emoji: '🎮',
  },
  {
    id: 15,
    image: 'https://via.placeholder.com/300x200',
    heading: 'Team Coordination Strategies',
    description: 'Improve teamwork with these coordination tips.',
    read_time: 5,
    tag: 'gameguide',
    category: 'Teamwork',
    emoji: '🤝',
  },
];

const Guides = () => {
  const topGuides = guidesData.filter((guide) => guide.tag === 'top').slice(0, 4);

  return (
 <section id="guides" className="py-16 bg-gray-900 bg-opacity-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center mb-12">
      <div className="flex-1 text-center">
        <h2 className="text-3xl font-bold text-yellow-400">Guides & Learning Hub</h2>
      </div>
      <button onClick={() => navigate('/guide')} className="text-yellow-400 hover:text-yellow-300 font-semibold">
        See More
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {topGuides.map((guide) => (
        <div key={guide.id} className="card p-6">
          <div className="text-4xl mb-4">{guide.emoji}</div>
          <h3 className="text-lg font-semibold mb-2">{guide.heading}</h3>
          <p className="text-gray-200 mb-4">{guide.description}</p>
          <Link className="text-yellow-400 hover:text-yellow-300 font-semibold" to={`/guide/${guide.id}`}>
            Read More →
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Guides;