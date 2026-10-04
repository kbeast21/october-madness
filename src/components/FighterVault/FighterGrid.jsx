import React, { useState } from 'react';
import FighterCard from './FighterCard';

export default function FighterGrid({ fighters }) {
  const [filter, setFilter] = useState('all');

  const filteredFighters = fighters.filter((f) => {
    if (filter === 'main') return f.status.includes('Main');
    if (filter === 'bench') return f.status.includes('Bench');
    return true;
  });

  return (
    <div className="py-6 space-y-6">
      <div className="flex gap-2 border-b border-slate-800 pb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filter === 'all' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-slate-400'}`}
        >
          All ({fighters.length})
        </button>
        <button
          onClick={() => setFilter('main')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filter === 'main' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-slate-400'}`}
        >
          Main Roster
        </button>
        <button
          onClick={() => setFilter('bench')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filter === 'bench' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400'}`}
        >
          Alternate Bench
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredFighters.map((fighter) => (
          <FighterCard key={fighter.id} fighter={fighter} />
        ))}
      </div>
    </div>
  );
}