import React from 'react';
import { Zap } from 'lucide-react';

export default function FighterCard({ fighter }) {
  const isBench = fighter.status.includes('Bench');

  return (
    <div className={`bg-slate-900 border rounded-xl p-4 transition-all hover:scale-[1.02] ${isBench ? 'border-purple-900/50 bg-slate-900/60' : 'border-orange-900/50'}`}>
      <div className="flex justify-between items-start mb-3">
        <span className="text-3xl">{fighter.image}</span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isBench ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-orange-950 text-orange-300 border border-orange-800'}`}>
          {fighter.status}
        </span>
      </div>

      <h3 className="font-bold text-slate-100 text-base mb-1">{fighter.name}</h3>
      <p className="text-xs text-slate-400 mb-3">{fighter.bio}</p>

      {fighter.attributes && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {fighter.attributes.map((attr, idx) => (
            <span key={idx} className="flex items-center gap-1 text-[10px] bg-slate-950 text-slate-300 px-2 py-1 rounded-md border border-slate-800">
              <Zap className="w-2.5 h-2.5 text-amber-400" /> {attr}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}