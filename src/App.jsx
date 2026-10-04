import React, { useState } from 'react';
import tournamentData from './data/tournament.json';
import Header from './components/Header';
import VotingBanner from './components/VotingBanner';
import BracketTree from './components/Bracket/BracketTree';
import FighterGrid from './components/FighterVault/FighterGrid';
import LocationHub from './components/LocationHub';
import MatchupModal from './components/Bracket/MatchupModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('bracket');
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      <Header data={tournamentData} />
      <VotingBanner data={tournamentData} />

      <main className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-center border-b border-slate-800 mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('bracket')}
              className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'bracket' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              Interactive Bracket
            </button>
            <button
              onClick={() => setActiveTab('roster')}
              className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'roster' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              Fighter Vault ({tournamentData.fighters.length})
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'locations' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              Locations & Hazards
            </button>
          </div>
        </div>

        {activeTab === 'bracket' && (
          <BracketTree
            rounds={tournamentData.rounds}
            fighters={tournamentData.fighters}
            onSelectMatch={(match) => setSelectedMatch(match)}
          />
        )}

        {activeTab === 'roster' && (
          <FighterGrid fighters={tournamentData.fighters} />
        )}

        {activeTab === 'locations' && (
          <LocationHub locations={tournamentData.locations} />
        )}
      </main>

      {selectedMatch && (
        <MatchupModal
          match={selectedMatch}
          fighters={tournamentData.fighters}
          votingUrl={tournamentData.activeVotingUrl}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}