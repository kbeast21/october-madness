import React from 'react';
import { MapPin } from 'lucide-react';

export default function MatchupCard({ match, fighters, onSelect }) {
  const fighterA = fighters.find((f) => f.id === match.fighterAId) || { name: 'TBD', image: '❓' };
  const fighterB = fighters.find((f) => f.id === match.fighterBId) || { name: 'TBD', image: '❓' };

  return (
    <div
      onClick={() => onSelect(match)}
      className="bg-slate-900 border border-slate-800 hover:border-orange-500/60 rounded-xl p-3 cursor-pointer transition-all hover:scale-[1.02] shadow-md"
    >
      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-2 border-b border-slate-800 pb-1.5">
        <span className="flex items-center gap-1 text-purple-400 font-medium">
          <MapPin className="w-3 h-3" /> {match.location || 'Neutral Arena'}
        </span>
        <span>Match {match.id.toUpperCase()}</span>
      </div>

      <div className="space-y-1.5">
        <div className={`flex justify-between items-center p-2 rounded-lg ${match.winnerId === fighterA.id ? 'bg-orange-950/40 border border-orange-600/40' : 'bg-slate-950/50'}`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">{fighterA.image}</span>
            <span className="text-xs font-bold text-slate-200">{fighterA.name}</span>
          </div>
          <span className="text-xs font-mono text-slate-400">{match.votesA} pts</span>
        </div>

        <div className={`flex justify-between items-center p-2 rounded-lg ${match.winnerId === fighterB.id ? 'bg-orange-950/40 border border-orange-600/40' : 'bg-slate-950/50'}`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">{fighterB.image}</span>
            <span className="text-xs font-bold text-slate-200">{fighterB.name}</span>
          </div>
          <span className="text-xs font-mono text-slate-400">{match.votesB} pts</span>
        </div>
      </div>
    </div>
  );
}