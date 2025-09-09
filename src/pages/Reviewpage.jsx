import React from 'react';
import { ReviewData } from '../data/ReviewData';
import { Link, useNavigate } from 'react-router-dom';

const Reviewpage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Reviews Hub
        </h1>
        <button
          onClick={() => navigate('/')}
          className="group inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors duration-300"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </button>

        {/* Casino Reviews Section */}
        <div className="py-16">
          <div className="space-y-6">
            {ReviewData.map((review) => (
              <div
                key={review.id}
                className="flex flex-col md:flex-row bg-gray-900 bg-opacity-90 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Left Side: Casino Name, Image, Visit Button */}
                <div className="md:w-1/4 flex flex-col items-start space-y-4">
                  <h3 className="text-lg font-semibold text-yellow-400">{review.name}</h3>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-50 h-30 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                  <Link
                    to={`/casino/${review.id}`}
                    className="w-full md:w-auto px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-300 text-center"
                  >
                    Casino Detail
                  </Link>
                </div>
                {/* Right Side: Comments */}
                <div className="md:w-3/4 md:pl-6 mt-6 md:mt-0">
                  {review.comments.slice(0, 3).map((comment, index) => (
                    <div
                      key={index}
                      className="mb-4 border-l-2 border-yellow-400 pl-3 last:mb-0"
                    >
                      <p className="text-sm font-semibold text-gray-200">{comment.userName}</p>
                      <p className="text-sm text-gray-400">Rating: {comment.rating}/5</p>
                      <p className="text-sm text-gray-200 line-clamp-3">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewpage;