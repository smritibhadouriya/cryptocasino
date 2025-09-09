import React, { useState } from 'react';
import { ReviewData } from '../data/ReviewData';
import { Link } from 'react-router-dom';
    const Reviews = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [rating, setRating] = useState(0);

      const openReviewModal = () => setIsModalOpen(true);
      const closeReviewModal = () => setIsModalOpen(false);

      const handleModalClick = (e) => {
        if (e.target.id === 'reviewModal') {
          closeReviewModal();
        }
      };

      const setStarRating = (value) => {
        setRating(value);
      };

      const handleCardClick = (id) => {
        window.location.href = `/casino/${id}`;
      };

      const renderStars = (rating) => {
        return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
      };

       
  const ReviewD = ReviewData.slice(0, 3);
      return (
        <section id="reviews" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-center flex-1 text-yellow-400">What Players Are Saying</h2>
              <Link to="/reviews" className="text-yellow-400 hover:text-yellow-300 font-semibold">See More</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {ReviewD.map((Review) => {
  const latestReview = Review.comments[0]; // Get the first (latest) review
  return (
    <div
      key={Review.id}
      className="card p-4 bg-gray-800 rounded-md shadow-md hover:shadow-lg cursor-pointer transition-shadow"
      onClick={() => handleCardClick(Review.id)}
    >
      <img
        src={Review.image}
        alt={Review.name}
        className="w-full h-24 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-medium text-yellow-400 mb-1">{Review.name}</h3>
      <div className="star-rating text-base mb-2 text-yellow-400">
        {renderStars(latestReview.rating)}
      </div>
      <p className="text-gray-200 text-sm mb-2">"{latestReview.comment}"</p>
      <div className="font-medium text-gray-300 text-sm">- {latestReview.userName}</div>
    </div>
  );
})}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={openReviewModal}
                className="bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Write Your Review
              </button>
            </div>
          </div>
          <div
            id="reviewModal"
            className={`fixed inset-0  bg-opacity-50 ${isModalOpen ? 'flex' : 'hidden'} z-50 items-center justify-center`}
            onClick={handleModalClick}
          >
            <div className="card rounded-xl p-8 max-w-md w-full mx-4 bg-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Write a Review</h3>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gray-200">Review Name</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    {ReviewData.map((Review) => (
                      <option key={Review.id}>{Review.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gray-200">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setStarRating(star)}
                        className={`text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-400`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-200">Your Review</label>
                  <textarea
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 h-24 text-white"
                    placeholder="Share your experience..."
                  ></textarea>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={closeReviewModal}
                    className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default Reviews;