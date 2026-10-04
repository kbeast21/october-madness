import React from 'react';
import { AlertCircle, ExternalLink } from 'lucide-react';

export default function VotingBanner({ data }) {
  if (!data.votingIsOpen) return null;

  return (
    <div className="bg-orange-950/80 border-b border-orange-600/40 py-2.5 px-4 text-center text-sm font-medium">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 flex-wrap text-orange-200">
        <AlertCircle className="w-4 h-4 text-orange-400" />
        <span>Ballots for <strong>{data.activeRound}</strong> are currently OPEN!</span>
        <a
          href={data.activeVotingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-orange-400 underline hover:text-orange-300 font-bold ml-1"
        >
          Submit Ballot <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}