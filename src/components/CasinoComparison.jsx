import React, { useState } from 'react';

import {casinoData} from '../data/CasinoData'
import { useNavigate } from 'react-router-dom';

  const CasinoComparison = () => {
      const [casino1, setCasino1] = useState('Royal Casino');
      const [casino2, setCasino2] = useState('Diamond Palace');
      const [comparisonResult, setComparisonResult] = useState(null);
      const navigate=useNavigate();

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
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Casino 1</label>
                  <select
                    value={casino1}
                    onChange={(e) => setCasino1(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    {casinoData.map((casino) => (
                      <option key={casino.id} value={casino.name}>
                        {casino.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={compareCasinos} 
                    className="w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                  >
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
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4">Welcome Bonus</td>
                          <td className="py-3 px-4 text-yellow-400">{comparisonResult.casino1.bonus} {comparisonResult.casino1.bonusDesc}</td>
                          <td className="py-3 px-4 text-yellow-400">{comparisonResult.casino2.bonus} {comparisonResult.casino2.bonusDesc}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4">User Rating</td>
                          <td className="py-3 px-4">{comparisonResult.casino1.rating} ({comparisonResult.casino1.reviews} reviews)</td>
                          <td className="py-3 px-4">{comparisonResult.casino2.rating} ({comparisonResult.casino2.reviews} reviews)</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4">Payout Speed</td>
                          <td className="py-3 px-4">{comparisonResult.casino1.quickStats.withdrawalTime}</td>
                          <td className="py-3 px-4">{comparisonResult.casino2.quickStats.withdrawalTime}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4">Game Selection</td>
                          <td className="py-3 px-4">{comparisonResult.casino1.games.join(', ')}</td>
                          <td className="py-3 px-4">{comparisonResult.casino2.games.join(', ')}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4">Game Providers</td>
                          <td className="py-3 px-4">{comparisonResult.casino1.gameProviders.join(', ')}</td>
                          <td className="py-3 px-4">{comparisonResult.casino2.gameProviders.join(', ')}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4">Payment Methods</td>
                          <td className="py-3 px-4">{comparisonResult.casino1.paymentMethods.map(method => method.name).join(', ')}</td>
                          <td className="py-3 px-4">{comparisonResult.casino2.paymentMethods.map(method => method.name).join(', ')}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Security</td>
                          <td className="py-3 px-4 text-green-400">{comparisonResult.casino1.security.map(sec => sec.value).join(', ')}</td>
                          <td className="py-3 px-4 text-green-400">{comparisonResult.casino2.security.map(sec => sec.value).join(', ')}</td>
                        </tr>
                          <tr className="border-b border-gray-600">
      <td className="py-3 px-4">Visit Link</td>
      <td className="py-3 px-4">
        <button 
          onClick={() => navigate(`/casino/${comparisonResult.casino1.id}`)}
          className="w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Visit
        </button>
      </td>
      <td className="py-3 px-4">
        <button
          onClick={() => navigate(`/casino/${comparisonResult.casino2.id}`)}
          className="w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Visit
        </button>
      </td>
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