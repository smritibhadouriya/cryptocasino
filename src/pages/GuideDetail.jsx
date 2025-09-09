import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

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


const GuideDetail = () => {
  const { id } = useParams();
  const guide = guidesData.find((g) => g.id === parseInt(id));
  const navigate =useNavigate();

  if (!guide) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#1A1A2E] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Guide Not Found</h2>
          <p className="text-gray-200 mb-6">Sorry, we couldn't find the guide you're looking for.</p>
          <Link to="/guide" className="btn-primary inline-block px-6 py-3 rounded-lg">
            Back to Guides Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#1A1A2E] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Guides Hub
        </button>
        <div className="bg-gray-900 bg-opacity-80 rounded-lg p-8">
          <img src={guide.image} alt={guide.heading} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">{guide.heading}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm text-gray-400">Category: {guide.category}</span>
            <span className="text-sm text-gray-400">Read time: {guide.read_time} min</span>
          </div>
          <p className="text-gray-200 mb-6">{guide.description}</p>
          <div className="prose prose-invert text-gray-200">
            <p>
              This is a placeholder for the full guide content. In a real application, this section would contain the detailed guide text, 
              including tips, strategies, or steps related to {guide.heading}. For example, if this is about "{guide.heading}", 
              you might include specific advice, images, or even videos to enhance the guide.
            </p>
            <p>
              To make this page dynamic, you can fetch the full content from a backend API or a markdown file, 
              and render it here using a markdown parser like `react-markdown`.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;