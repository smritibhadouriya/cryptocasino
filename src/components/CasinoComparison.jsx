import React, { useState } from 'react';

import {casinoData} from '../data/CasinoData'

const CasinoComparison = () => {
  const [casino1, setCasino1] = useState('Royal Casino');
  const [casino2, setCasino2] = useState('Diamond Palace');
  const [comparisonResult, setComparisonResult] = useState(null);

  const compareCasinos = () => {
    const selectedCasino1 = casinoData.find((casino) => casino.name === casino1);
    const selectedCasino2 = casinoData.find((casino) => casino.name === casino2);

    if (selectedCasino1 && selectedCasino2) {
      setComparisonResult({
        casino1: selectedCasino1,
        casino2: selectedCasino2,
      });
    } else {
      alert('Please select valid casinos.');
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Casino Comparison</h2>
        <div className="card p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">Select Casino 1</label>
              <select
                value={casino1}
                onChange={(e) => setCasino1(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white"
              >
                {casinoData.map((casino) => (
                  <option key={casino.id} value={casino.name}>
                    {casino.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Select Casino 2</label>
              <select
                value={casino2}
                onChange={(e) => setCasino2(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white"
              >
                {casinoData.map((casino) => (
                  <option key={casino.id} value={casino.name}>
                    {casino.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button onClick={compareCasinos} className="btn-primary w-full">
                Compare Now
              </button>
            </div>
          </div>
          {comparisonResult && (
            <div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="py-3 px-4">Feature</th>
                      <th className="py-3 px-4">{comparisonResult.casino1.name}</th>
                      <th className="py-3 px-4">{comparisonResult.casino2.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key="welcome-bonus" className="border-b border-gray-600">
                      <td className="py-3 px-4">Welcome Bonus</td>
                      <td className="py-3 px-4 text-yellow-400">{comparisonResult.casino1.bonus}</td>
                      <td className="py-3 px-4 text-yellow-400">{comparisonResult.casino2.bonus}</td>
                    </tr>
                    <tr key="user-rating" className="border-b border-gray-600">
                      <td className="py-3 px-4">User Rating</td>
                      <td className="py-3 px-4">{comparisonResult.casino1.rating}</td>
                      <td className="py-3 px-4">{comparisonResult.casino2.rating}</td>
                    </tr>
                    <tr key="payout-speed" className="border-b border-gray-600">
                      <td className="py-3 px-4">Payout Speed</td>
                      <td className="py-3 px-4">{comparisonResult.casino1.speed}</td>
                      <td className="py-3 px-4">{comparisonResult.casino2.speed}</td>
                    </tr>
                    <tr key="game-selection" className="border-b border-gray-600">
                      <td className="py-3 px-4">Game Selection</td>
                      <td className="py-3 px-4">{comparisonResult.casino1.games.join(', ')}</td>
                      <td className="py-3 px-4">{comparisonResult.casino2.games.join(', ')}</td>
                    </tr>
                    <tr key="mobile-support">
                      <td className="py-3 px-4">Mobile Support</td>
                      <td className="py-3 px-4 text-green-400">{comparisonResult.casino1.mobile}</td>
                      <td className="py-3 px-4 text-green-400">{comparisonResult.casino2.mobile}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CasinoComparison;