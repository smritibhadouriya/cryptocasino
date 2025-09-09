import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GameDemo = () => {
  const [symbols, setSymbols] = useState(['🍒', '🍋', '🔔']);
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const navigate= useNavigate();
  const spinSlot = () => {
    const symbolsList = ['🍒', '🍋', '🔔', '💎', '⭐', '🍀'];
    setIsSpinning(true);
    setResult('');

    let spins = 0;
    const spinInterval = setInterval(() => {
      setSymbols(symbolsList.sort(() => Math.random() - 0.5).slice(0, 3));
      spins++;

      if (spins > 20) {
        clearInterval(spinInterval);
        const finalSymbols = symbolsList.sort(() => Math.random() - 0.5).slice(0, 3);
        setSymbols(finalSymbols);

        if (finalSymbols[0] === finalSymbols[1] && finalSymbols[1] === finalSymbols[2]) {
          setResult('🎉 JACKPOT! You won! 🎉');
        } else if (finalSymbols[0] === finalSymbols[1] || finalSymbols[1] === finalSymbols[2]) {
          setResult('✨ Small win! ✨');
        } else {
          setResult('Try again!');
        }
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <section className="py-16 bg-gray-900 bg-opacity-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400"> Try Our Free Slot Demo</h2>
        <div className="card p-8 mb-8">
          <div className="text-6xl mb-4">🎰</div>
          <h3 className="text-2xl font-semibold mb-4">Lucky Sevens Slot</h3>
          <div className="flex justify-center space-x-4 mb-6">
            {symbols.map((symbol, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-4xl">
                {symbol}
              </div>
            ))}
          </div>
          <button
            onClick={spinSlot}
            disabled={isSpinning}
            className="btn-primary mb-4 disabled:opacity-50"
          >
            {isSpinning ? 'SPINNING...' : 'SPIN (Free Play)'}
          </button>
          <div
            className={`text-lg font-semibold ${
              result.includes('JACKPOT') ? 'text-yellow-400' : result.includes('Small') ? 'text-green-400' : 'text-gray-200'
            }`}
          >
            {result}
          </div>
        </div>
        <button className="btn-primary" onClick={() => navigate('/games/slots')}>Play for Real Money</button>
      </div>
    </section>
  );
};

export default GameDemo;