import React from 'react';
import { MapPin, Skull } from 'lucide-react';

export default function LocationHub({ locations }) {
  return (
    <div className="py-6 space-y-4">
      <div className="border-b border-slate-800 pb-2">
        <h2 className="text-base font-bold text-orange-400 uppercase tracking-wider">Battleground Locations & Hazards</h2>
        <p className="text-xs text-slate-500">Environmental factors that apply during Superfight combat debaters</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((loc) => (
          <div key={loc.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold text-sm">
              <MapPin className="w-4 h-4" /> {loc.name}
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 flex items-start gap-2 text-xs text-slate-300">
              <Skull className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>{loc.hazard}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}