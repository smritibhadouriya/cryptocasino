import React from 'react';
import { useNavigate } from 'react-router-dom';

    const Games = () => {
      const navigate = useNavigate();

      const games = [
        { type: 'slots', emoji: '🎰', name: 'Slots' },
        { type: 'blackjack', emoji: '🃏', name: 'Blackjack' },
        { type: 'roulette', emoji: '🎲', name: 'Roulette' },
        { type: 'poker', emoji: '♠️', name: 'Poker' },
        { type: 'live', emoji: '📹', name: 'Live Dealer' },
        { type: 'other', emoji: '🎯', name: 'Other Games' },
      ];

      const selectGame = (gameType) => {
        navigate(`/games/${gameType}`);
      };

      return (
        <section id="games" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Play the Games You Love</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {games.map((game) => (
                <div
                  key={game.type}
                  className="card p-6 text-center cursor-pointer bg-gray-800 hover:bg-gray-700 transition rounded-lg"
                  onClick={() => selectGame(game.type)}
                >
                  <div className="text-5xl mb-4">{game.emoji}</div>
                  <h3 className="font-semibold text-white">{game.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };


export default Games;