import React, { useState } from 'react';
import { Plus, X, Play, Users } from 'lucide-react';
import { Player } from '../types';

interface SetupScreenProps {
  onStartGame: (players: Player[]) => void;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({ onStartGame }) => {
  const [playerNames, setPlayerNames] = useState<string[]>(['Player 1', 'Player 2']);

  const addPlayer = () => {
    if (playerNames.length < 6) {
      setPlayerNames([...playerNames, `Player ${playerNames.length + 1}`]);
    }
  };

  const removePlayer = (index: number) => {
    if (playerNames.length > 2) {
      const newNames = [...playerNames];
      newNames.splice(index, 1);
      setPlayerNames(newNames);
    }
  };

  const updateName = (index: number, name: string) => {
    const newNames = [...playerNames];
    newNames[index] = name;
    setPlayerNames(newNames);
  };

  const handleStart = () => {
    const validPlayers = playerNames.map((name, idx) => ({
      id: `p-${Date.now()}-${idx}`,
      name: name.trim() || `Player ${idx + 1}`
    }));
    onStartGame(validPlayers);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-900 text-slate-100">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
        <div className="flex items-center justify-center mb-8 text-blue-400">
            <Users size={48} />
        </div>
        <h1 className="text-4xl font-display text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Color Blitz
        </h1>
        <p className="text-center text-slate-400 mb-8">Enter 2-6 players to begin</p>

        <div className="space-y-3 mb-8">
          {playerNames.map((name, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-6 text-slate-500 font-mono text-sm">{idx + 1}.</span>
              <input
                type="text"
                value={name}
                onChange={(e) => updateName(idx, e.target.value)}
                className="flex-1 bg-slate-700 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Player Name"
              />
              {playerNames.length > 2 && (
                <button
                  onClick={() => removePlayer(idx)}
                  className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={addPlayer}
            disabled={playerNames.length >= 6}
            className="flex-1 py-3 px-4 rounded-xl border-2 border-dashed border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} /> Add Player
          </button>
          
          <button
            onClick={handleStart}
            className="flex-[2] bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-[0_4px_0_rgb(29,78,216)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2"
          >
            Start Game <Play size={20} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};