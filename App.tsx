import React, { useState } from 'react';
import { SetupScreen } from './components/SetupScreen';
import { GameScreen } from './components/GameScreen';
import { Player } from './types';

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = (newPlayers: Player[]) => {
    setPlayers(newPlayers);
    setGameStarted(true);
  };

  const handleExitGame = () => {
    setGameStarted(false);
    setPlayers([]);
  };

  return (
    <div className="font-sans antialiased text-slate-100 bg-slate-900 min-h-screen">
      {!gameStarted ? (
        <SetupScreen onStartGame={handleStartGame} />
      ) : (
        <GameScreen initialPlayers={players} onExit={handleExitGame} />
      )}
    </div>
  );
};

export default App;