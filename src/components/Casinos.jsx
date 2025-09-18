import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { casinoData } from '../data/CasinoData';

const Casinos = ({ casinos = casinoData }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const casinosPerPage = 5;

  const handleKnowMore = (id) => {
    navigate(`/casino/${id}`);
  };

  // Calculate pagination
  const indexOfLastCasino = currentPage * casinosPerPage;
  const indexOfFirstCasino = indexOfLastCasino - casinosPerPage;
  const currentCasinos = casinos.slice(indexOfFirstCasino, indexOfLastCasino);
  const totalPages = Math.ceil(casinos.length / casinosPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle prev/next navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="casinos" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Top Casinos of the Month</h2>
        
        {/* Casino List */}
        <div className="space-y-6" id="casino-list">
          {casinos.length > 0 ? (
            currentCasinos.map((casino) => (
              <div
                key={casino.id}
                className={`card p-6 ${casino.isEditorsChoice ? 'border-2 border-yellow-400' : ''} relative bg-gray-800 rounded-lg shadow-lg`}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="flex items-center space-x-4">
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
                    <button
                      onClick={() => handleKnowMore(casino.id)}
                      className="btn-primary w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition font-semibold"
                    >
                      Casino Detail
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No casinos match the selected filter.</p>
          )}
        </div>

        {/* Pagination */}
        {casinos.length > casinosPerPage && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            {/* Previous Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentPage === 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-700 text-yellow-400 hover:bg-gray-600 hover:text-yellow-300'
              }`}
            >
              <svg
                className="w-5 h-5 inline mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-yellow-400 text-gray-900'
                      : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-700 text-yellow-400 hover:bg-gray-600 hover:text-yellow-300'
              }`}
            >
              Next
              <svg
                className="w-5 h-5 inline ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Page Info */}
        {casinos.length > 0 && (
          <div className="text-center mt-6 text-gray-400 text-sm">
            Showing {indexOfFirstCasino + 1} to {Math.min(indexOfLastCasino, casinos.length)} of {casinos.length} casinos
          </div>
        )}
      </div>
    </section>
  );
};

export default Casinos;