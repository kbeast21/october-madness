import React from 'react';
import { Skull, Calendar, Vote } from 'lucide-react';

export default function Header({ data }) {
  return (
    <header className="border-b border-orange-950 bg-slate-900/80 backdrop-blur sticky top-0 z-40 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skull className="w-8 h-8 text-orange-500 animate-pulse" />
          <div>
            <h1 className="text-2xl font-black tracking-wider text-orange-500 uppercase">
              {data.tournamentName}
            </h1>
            <p className="text-xs text-slate-400">Culminating Midnight on Halloween 2026</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>Active Round: <strong className="text-purple-300">{data.activeRound}</strong></span>
          </div>

          <a
            href={data.activeVotingUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold px-4 py-1.5 rounded-full shadow-lg transition-all"
          >
            <Vote className="w-4 h-4" />
            Vote Now
          </a>
        </div>
      </div>
    </header>
  );
}