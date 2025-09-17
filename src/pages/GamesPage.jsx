import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SeoHelmet from '../components/seo/SeoHelmet';

    const GamesPage = () => {
      const { gameType } = useParams();
        const navigate =useNavigate();
        useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array ensures it runs only once
      const gameData = {
        slots: {
          name: 'Slots',
          emoji: '🎰',
          games: [
            { id: 'slot1', name: 'Starburst', provider: 'NetEnt', placeholderColor: 'bg-blue-500' },
            { id: 'slot2', name: 'Gonzo\'s Quest', provider: 'NetEnt', placeholderColor: 'bg-green-500' },
            { id: 'slot3', name: 'Book of Dead', provider: 'Play\'n GO', placeholderColor: 'bg-red-500' },
          ],
        },
        blackjack: {
          name: 'Blackjack',
          emoji: '🃏',
          games: [
            { id: 'black1', name: 'Classic Blackjack', provider: 'NetEnt', placeholderColor: 'bg-purple-500' },
            { id: 'black2', name: 'Blackjack Pro', provider: 'Play\'n GO', placeholderColor: 'bg-indigo-500' },
            { id: 'black3', name: 'Live Blackjack', provider: 'Evolution', placeholderColor: 'bg-pink-500' },
          ],
        },
        roulette: {
          name: 'Roulette',
          emoji: '🎲',
          games: [
            { id: 'roul1', name: 'French Roulette', provider: 'NetEnt', placeholderColor: 'bg-yellow-500' },
            { id: 'roul2', name: 'European Roulette Pro', provider: 'Play\'n GO', placeholderColor: 'bg-orange-500' },
            { id: 'roul3', name: 'American Roulette 3D', provider: 'Evoplay', placeholderColor: 'bg-teal-500' },
            { id: 'roul4', name: 'European Roulette', provider: 'Red Tiger', placeholderColor: 'bg-cyan-500' },
            { id: 'roul5', name: 'Roulette', provider: 'Relax Gaming', placeholderColor: 'bg-lime-500' },
          ],
        },
        poker: {
          name: 'Poker',
          emoji: '♠️',
          games: [
            { id: 'poke1', name: 'Texas Hold\'em', provider: 'NetEnt', placeholderColor: 'bg-blue-600' },
            { id: 'poke2', name: 'Omaha Poker', provider: 'Play\'n GO', placeholderColor: 'bg-green-600' },
            { id: 'poke3', name: 'Video Poker', provider: 'Evolution', placeholderColor: 'bg-red-600' },
          ],
        },
        live: {
          name: 'Live Dealer',
          emoji: '📹',
          games: [
            { id: 'live1', name: 'Live Roulette', provider: 'Evolution', placeholderColor: 'bg-purple-600' },
            { id: 'live2', name: 'Live Blackjack', provider: 'NetEnt', placeholderColor: 'bg-indigo-600' },
            { id: 'live3', name: 'Live Baccarat', provider: 'Play\'n GO', placeholderColor: 'bg-pink-600' },
          ],
        },
        other: {
          name: 'Other Games',
          emoji: '🎯',
          games: [
            { id: 'other1', name: 'Keno', provider: 'NetEnt', placeholderColor: 'bg-yellow-600' },
            { id: 'other2', name: 'Bingo', provider: 'Play\'n GO', placeholderColor: 'bg-orange-600' },
            { id: 'other3', name: 'Scratch Cards', provider: 'Evolution', placeholderColor: 'bg-teal-600' },
          ],
        },
      };

      const category = gameData[gameType] || { name: 'Unknown Game', emoji: '❓', games: [] };

      const playGame = (gameName) => {
        alert(`Starting ${gameName}...`);
      };

      return (
        <section className="py-16 bg-gray-900 min-h-screen">
     <SeoHelmet
  title={`${category.name} Games - Play Online`}
  description={`Explore and play ${category.name} games online. Enjoy games from top providers and have fun while earning rewards.`}
   keywords={["casino", "online gambling", `${category.name.toLowerCase()}`, "casino games", "bonuses","online games"]}
  href={`https://www.thecasinopapa/games/${gameType}`}
/>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <button  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"  onClick={() => navigate(-1)} aria-label="Go back">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back 
        </button>
            <h1 className="text-3xl font-bold text-center mb-12 text-yellow-400">{category.name} Games</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.games.map((game) => (
                <div
                  key={game.id}
                  className="card p-6 text-center cursor-pointer bg-gray-800 hover:bg-gray-700 transition rounded-lg"
                  onClick={() => playGame(game.name)}
                >
                  <div className="w-full h-32 mb-4 rounded" style={{ backgroundColor: game.placeholderColor }}></div>
                  <h2 className="font-semibold text-white">{game.name}</h2>
                  <p className="text-gray-400 text-sm">{game.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };


export default GamesPage