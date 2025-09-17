import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegStar, FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ReviewData } from '../data/ReviewData';
import { casinoData } from '../data/CasinoData';
import SeoHelmet from '../components/seo/SeoHelmet';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-2xl" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-2xl" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 text-2xl" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

const CasinoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const casino = casinoData.find((casino) => casino.id === parseInt(id));
  const otherCasinos = casinoData.filter((c) => c.id !== parseInt(id)).slice(0, 4);
  const review = ReviewData.find((review) => review.id === parseInt(id));

  if (!casino) {
    return (
      <section className="py-16 bg-gray-900 min-h-screen text-yellow-400">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <button
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
            onClick={() => navigate(-1)}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back
          </button>
          <h2 className="text-3xl font-bold text-center text-white">
            Casino Not Found
          </h2>
          <p className="text-center text-gray-300 mt-4">
            Sorry, we couldn't find the casino you're looking for.
          </p>
          <button
            className="mt-6 mx-auto block bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const commentsPerPage = 3;

  const totalComments = review?.comments?.length || 0;
  const displayedComments = review?.comments?.slice(
    currentCommentIndex,
    currentCommentIndex + commentsPerPage
  ) || [];

  const handleNextComments = () => {
    if (currentCommentIndex + commentsPerPage < totalComments) {
      setCurrentCommentIndex(currentCommentIndex + commentsPerPage);
    }
  };

  const handlePrevComments = () => {
    if (currentCommentIndex > 0) {
      setCurrentCommentIndex(currentCommentIndex - commentsPerPage);
    }
  };

  const rating = parseFloat(casino.rating);
  const displayRating = Number.isInteger(rating) ? `${rating}/5` : `${rating.toFixed(1)}/5`;

  return (
    <section className="py-16 bg-gray-900 min-h-screen text-gray-300">
      <SeoHelmet
        title={`${casino.name} - Casino Review & Ratings`}
        description={`Full review of ${casino.name} including ratings, bonuses, games, and payment methods. Find the best casino for your needs.`}
        keywords={["casino", "online gambling", `${casino.name.toLowerCase()}`, "casino review", "bonuses"]}
        href={`https://www.thecasinopapa/casinos/${id}`}
      />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <button
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
          onClick={() => navigate(-1)}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back
        </button>

        {/* Casino Header */}
        <div className="rounded-2xl p-8 mb-8 bg-gray-800 border border-gray-600">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <img
              src={casino.image}
              className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-gray-900 rounded-xl flex items-center justify-center text-4xl font-bold text-white"
              alt={casino.name}
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 text-white">{casino.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="star-rating mb-2 flex gap-2">
                    <StarRating rating={parseFloat(casino.rating)} />
                    <span className="text-gray-300 text-md mt-1">{displayRating}</span>
                  </div>
                </div>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {casino.badge}
                </span>
                {casino.isEditorsChoice && (
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Editor's Choice
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-lg mb-4">{casino.description}</p>
              <button
                className="bg-yellow-400 text-black py-2 px-10 rounded text-center hover:bg-yellow-500"
                onClick={() => window.open(casino.visitlink, '_blank', 'noopener,noreferrer')}
              >
                Visit Casino
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: casino.quickStats.gamesCount, label: "Games", color: "yellow-400" },
            { value: casino.bonus, label: casino.bonusDesc, color: "yellow-400" },
            { value: casino.quickStats.withdrawalTime, label: "Withdrawal", color: "yellow-400" },
            { value: casino.quickStats.foundedYear, label: "Founded", color: "yellow-400" },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-700 rounded-xl p-6 border border-gray-600 text-center">
              <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bonuses & Promotions */}
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">🎁 Bonuses & Promotions</h2>
              <div className="space-y-4">
                {casino.bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 border border-yellow-400/30"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-yellow-400">{bonus.title}</h3>
                    <p className="text-2xl font-bold text-yellow-400 mb-2">{bonus.amount}</p>
                    {bonus.terms && <p className="text-gray-300 text-sm">{bonus.terms}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Games */}
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">🎮 Games Library</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {casino.gameDetails.map((game, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-4 border bg-gray-800 border-yellow-400/30"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-yellow-400">
                      {casino.gameIcons[game.name]} {game.name.charAt(0).toUpperCase() + game.name.slice(1)}
                    </h3>
                    <p className="text-2xl font-bold mb-1 text-yellow-400">{game.count}</p>
                    <p className="text-gray-300 text-sm">{game.examples}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <h4 className="font-semibold mb-2 text-yellow-400">🏆 Top Game Providers</h4>
                <div className="flex flex-wrap gap-2">
                  {casino.gameProviders.map((provider, index) => (
                    <span key={index} className="bg-gray-600 px-3 py-1 rounded-full text-sm text-white">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">💳 Payment Methods</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">Deposits</h3>
                  <div className="space-y-3">
                    {casino.paymentMethods.map((method, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{method.icon} {method.name}</span>
                        <span className="text-yellow-400">{method.depositTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">Withdrawals</h3>
                  <div className="space-y-3">
                    {casino.paymentMethods.map((method, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{method.icon} {method.name}</span>
                        <span className="text-yellow-400">{method.withdrawalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-yellow-400/30">
                <p className="text-sm text-gray-300">
                  <strong>Limits:</strong> Min deposit: {casino.paymentLimits.minDeposit} • Max withdrawal: {casino.paymentLimits.maxWithdrawal} • {casino.paymentLimits.fees}
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Pros & Cons */}
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">⚖️ Pros & Cons</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-yellow-400">✅ Pros</h3>
                  <ul className="space-y-2 text-sm">
                    {casino.positives.map((positive, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{positive}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-amber-600">❌ Cons</h3>
                  <ul className="space-y-2 text-sm">
                    {casino.negatives.map((negative, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>{negative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Security & Licensing */}
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">🔒 Security & Licensing</h2>
              <div className="space-y-4">
                {casino.security.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-yellow-400/30"
                  >
                    <span className="text-2xl text-yellow-400">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-yellow-400">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.value}{item.details ? ` • ${item.details}` : ''}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Verdict */}
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">🏆 Final Verdict</h2>
              <div className="text-center mb-4">
                <div className="star-rating mb-2 flex justify-center gap-2">
                  <StarRating rating={parseFloat(casino.rating)} />
                  <span className="text-gray-300 text-md mt-1">{displayRating}</span>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                {displayedComments.map((comment, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 border border-yellow-400/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-white">{comment.userName}</span>
                      <StarRating rating={comment.rating} />
                      <span className="text-gray-300 text-sm">
                        {Number.isInteger(comment.rating) ? `${comment.rating}/5` : `${comment.rating.toFixed(1)}/5`}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{comment.comment}</p>
                  </div>
                ))}
              </div>
              {totalComments > commentsPerPage && (
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={handlePrevComments}
                    disabled={currentCommentIndex === 0}
                    className={`p-2 rounded-full ${
                      currentCommentIndex === 0
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                    } transition-all`}
                  >
                    <FaArrowLeft />
                  </button>
                  <span className="text-gray-300">
                    {currentCommentIndex + 1} -{' '}
                    {Math.min(currentCommentIndex + commentsPerPage, totalComments)} of {totalComments}
                  </span>
                  <button
                    onClick={handleNextComments}
                    disabled={currentCommentIndex + commentsPerPage >= totalComments}
                    className={`p-2 rounded-full ${
                      currentCommentIndex + commentsPerPage >= totalComments
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                    } transition-all`}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Explore More Casinos */}
        {otherCasinos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
              Explore More Casinos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {otherCasinos.map((otherCasino) => {
                const otherRating = parseFloat(otherCasino.rating);
                const otherDisplayRating = Number.isInteger(otherRating)
                  ? `${otherRating}/5`
                  : `${otherRating.toFixed(1)}/5`;
                return (
                  <div
                    key={otherCasino.id}
                    className="card p-6 text-center bg-gray-700 rounded-xl border border-gray-600 cursor-pointer hover:bg-gray-600 transition"
                    onClick={() => navigate(`/casino/${otherCasino.id}`)}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-white">{otherCasino.name}</h3>
                    <div className="bonus mb-4 text-yellow-400">
                      {`${otherCasino.bonus} ${otherCasino.bonusDesc}`}
                    </div>
                    <div className="star-rating mb-4 flex justify-center gap-2 text-yellow-400">
                      <StarRating rating={parseFloat(otherCasino.rating)} />
                      <span>({otherDisplayRating})</span>
                    </div>
                    <button
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 py-2 rounded-lg transition-all transform hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/casino/${otherCasino.id}`);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
                      }}
                    >
                      Play Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CasinoDetails;