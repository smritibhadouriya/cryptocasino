import React, { useEffect, useState } from 'react';
import { ReviewData } from '../data/ReviewData';
import { Link, useNavigate } from 'react-router-dom';
import SeoHelmet from '../components/seo/SeoHelmet';

const Reviewpage = () => {
  const navigate = useNavigate();
  // State to track visible comments for each review
  const [visibleComments, setVisibleComments] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array ensures it runs only once

  // Function to handle showing more comments
  const handleShowMore = (reviewId) => {
    setVisibleComments((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 3) + 3, // Show 3 more comments
    }));
  };

  // Function to handle showing less comments
  const handleShowLess = (reviewId) => {
    setVisibleComments((prev) => ({
      ...prev,
      [reviewId]: 3, // Reset to initial 3 comments
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#1A1A2E] text-white">
      <SeoHelmet
        title="Review Casino"
        description="Users can share their reviews and experiences to help others decide if a casino is good or not."
        keywords={["casino", "online gambling", "casino review", "casino games", "bonuses", "online games"]}
        href={`https://www.thecasinopapa/reviews`}
      />
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
            {ReviewData.map((review) => {
              const visibleCount = visibleComments[review.id] || 3; // Default to 3 comments
              const hasMoreComments = review.comments.length > visibleCount;
              const isShowingAll = visibleCount >= review.comments.length;

              return (
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
                      aria-label="Way to know more about your favorite casinos"
                      className="w-full md:w-auto px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-300 text-center"
                    >
                      Casino Detail
                    </Link>
                  </div>
                  {/* Right Side: Comments */}
                  <div className="md:w-3/4 md:pl-6 mt-6 md:mt-0">
                    {review.comments.slice(0, visibleCount).map((comment, index) => (
                      <div
                        key={index}
                        className="mb-4 border-l-2 border-yellow-400 pl-3 last:mb-0"
                      >
                        <p className="text-sm font-semibold text-gray-200">{comment.userName}</p>
                        <p className="text-sm text-gray-400">Rating: {comment.rating}/5</p>
                        <p className="text-sm text-gray-200 line-clamp-3">{comment.comment}</p>
                      </div>
                    ))}
                    {/* Show More/Show Less Button */}
                    {review.comments.length > 3 && (
                      <button
                        onClick={() =>
                          isShowingAll ? handleShowLess(review.id) : handleShowMore(review.id)
                        }
                        className="mt-4 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                      >
                        {isShowingAll ? (
                          <>
                            Show Less
                            <svg
                              className="w-5 h-5 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 15l7-7 7 7"
                              ></path>
                            </svg>
                          </>
                        ) : (
                          <>
                            Show More
                            <svg
                              className="w-5 h-5 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewpage;