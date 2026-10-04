import React from 'react';
import MatchupCard from './MatchupCard';

export default function BracketTree({ rounds, fighters, onSelectMatch }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
      {rounds.map((round) => (
        <div key={round.id} className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="font-bold text-orange-400 text-sm uppercase tracking-wider">{round.name}</h3>
            <span className="text-xs text-slate-500">{round.dates}</span>
          </div>

          <div className="space-y-4">
            {round.matchups && round.matchups.length > 0 ? (
              round.matchups.map((match) => (
                <MatchupCard
                  key={match.id}
                  match={match}
                  fighters={fighters}
                  onSelect={onSelectMatch}
                />
              ))
            ) : (
              <div className="bg-slate-900/40 border border-dashed border-slate-800 rounded-xl p-6 text-center text-xs text-slate-600">
                Matchups lock after previous round concludes
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}