import React, { useState, useEffect } from 'react';
import { GameState, GamePhase, DieOutcome, Player } from '../types';
import { DIE_FACES, ANIMATION_DURATION_ROLL_MS, ANIMATION_DURATION_REVEAL_MS } from '../constants';
import { Die3D } from './Die3D';
import { VisualEffectsContainer } from './VisualEffects.tsx';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GameScreenProps {
  initialPlayers: Player[];
  onExit: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ initialPlayers, onExit }) => {
  const [gameState, setGameState] = useState<GameState>({
    phase: GamePhase.IDLE,
    players: initialPlayers,
    currentPlayerIndex: 0,
    lastRoll: null,
  });

  // Haptic feedback simulation
  const triggerHaptic = () => {
    if (navigator.vibrate) navigator.vibrate(200);
  };

  const handleRoll = () => {
    if (gameState.phase !== GamePhase.IDLE && gameState.phase !== GamePhase.RESULT) return;

    setGameState(prev => ({ ...prev, phase: GamePhase.ROLLING }));

    // Placeholder for sound effect: playRollSound()

    // 1. Rolling Phase
    setTimeout(() => {
      // Determine result
      const rollValue = Math.floor(Math.random() * 6) + 1;
      const result = DIE_FACES[rollValue];

      setGameState(prev => ({
        ...prev,
        lastRoll: result,
        phase: GamePhase.REVEAL
      }));

      triggerHaptic();
      
      // Placeholder for result sound: playResultSound(result.outcome)

      // 2. Reveal Phase
      setTimeout(() => {
        setGameState(prev => ({ ...prev, phase: GamePhase.RESULT }));
      }, ANIMATION_DURATION_REVEAL_MS);

    }, ANIMATION_DURATION_ROLL_MS);
  };

  const nextTurn = () => {
    setGameState(prev => ({
      ...prev,
      phase: GamePhase.IDLE,
      lastRoll: null,
      currentPlayerIndex: (prev.currentPlayerIndex + 1) % prev.players.length
    }));
  };

  const currentPlayer = gameState.players[gameState.currentPlayerIndex];
  const isRolling = gameState.phase === GamePhase.ROLLING;
  const isReveal = gameState.phase === GamePhase.REVEAL;
  const isResult = gameState.phase === GamePhase.RESULT;

  return (
    <div className="relative min-h-screen w-full bg-slate-900 flex flex-col overflow-hidden">
      
      {/* Full Screen Effect Overlay */}
      <AnimatePresence>
        {isReveal && gameState.lastRoll && (
          <VisualEffectsContainer outcome={gameState.lastRoll.outcome} visible={true} />
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="z-10 w-full p-6 flex justify-between items-center bg-slate-900/50 backdrop-blur-md border-b border-slate-800">
        <button onClick={onExit} className="text-slate-400 hover:text-white transition-colors">
            Exit
        </button>
        <div className="text-center">
            <h2 className="text-slate-400 text-sm uppercase tracking-widest font-bold">Current Player</h2>
            <div className="text-xl font-bold text-white">{currentPlayer.name}</div>
        </div>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 p-4">
        
        {/* Turn Indicator */}
        <div className="mb-8 text-center">
            {gameState.phase === GamePhase.IDLE && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-display text-blue-400"
                >
                    It's {currentPlayer.name}'s Turn!
                </motion.div>
            )}
            {isRolling && (
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="text-2xl font-mono text-yellow-400"
                >
                    ROLLING...
                </motion.div>
            )}
        </div>

        {/* Die Placeholder / Animation */}
        <div className="relative w-64 h-64 flex items-center justify-center">
            {isResult ? (
                 <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    type="spring"
                    className="flex flex-col items-center"
                 >
                    <div className="text-6xl font-display mb-4" style={{ color: gameState.lastRoll?.colors[0] }}>
                        {gameState.lastRoll?.label}
                    </div>
                    <div className="text-slate-400">{gameState.lastRoll?.description}</div>
                 </motion.div>
            ) : (
                <Die3D rolling={isRolling} />
            )}
        </div>

      </div>

      {/* Bottom Action Area */}
      <div className="z-10 p-8 w-full max-w-lg mx-auto pb-12">
        {gameState.phase === GamePhase.IDLE && (
            <button
                onClick={handleRoll}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-2xl py-6 rounded-2xl shadow-[0_6px_0_rgb(29,78,216)] active:shadow-none active:translate-y-[6px] transition-all"
            >
                ROLL THE DIE!
            </button>
        )}

        {gameState.phase === GamePhase.RESULT && (
            <button
                onClick={nextTurn}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-2xl py-6 rounded-2xl shadow-[0_6px_0_rgb(5,150,105)] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-3"
            >
                Next Player <ArrowRight size={32} />
            </button>
        )}
        
        {/* Disable controls during rolling/reveal */}
        {(isRolling || isReveal) && (
            <div className="h-24 flex items-center justify-center text-slate-500 animate-pulse">
                Fate is deciding...
            </div>
        )}
      </div>
    </div>
  );
};