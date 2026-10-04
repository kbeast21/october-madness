import React from 'react';
import { X, ExternalLink, ShieldAlert } from 'lucide-react';

export default function MatchupModal({ match, fighters, votingUrl, onClose }) {
  const fighterA = fighters.find((f) => f.id === match.fighterAId) || { name: 'TBD', image: '❓' };
  const fighterB = fighters.find((f) => f.id === match.fighterBId) || { name: 'TBD', image: '❓' };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-orange-900/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-4">
          Matchup Breakdown
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
            <div className="text-4xl mb-2">{fighterA.image}</div>
            <h4 className="font-bold text-slate-100 text-sm">{fighterA.name}</h4>
            <p className="text-xs text-slate-400 mt-1">{fighterA.bio}</p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
            <div className="text-4xl mb-2">{fighterB.image}</div>
            <h4 className="font-bold text-slate-100 text-sm">{fighterB.name}</h4>
            <p className="text-xs text-slate-400 mt-1">{fighterB.bio}</p>
          </div>
        </div>

        <div className="bg-purple-950/30 border border-purple-800/40 p-3 rounded-xl mb-6 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div className="text-xs text-purple-200">
            <strong>Battleground Location:</strong> {match.location || 'Neutral Grounds'}
          </div>
        </div>

        <a
          href={votingUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 rounded-xl transition-all"
        >
          Cast Vote for Matchup <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}