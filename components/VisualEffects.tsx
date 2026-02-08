import React from 'react';
import { motion } from 'framer-motion';
import { DieOutcome } from '../types';

interface EffectProps {
  active: boolean;
}

// 1. BLITZ: Electric/Lightning
export const BlitzEffect: React.FC<EffectProps> = ({ active }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 z-0 bg-blue-900 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        animate={{ opacity: [0, 0.8, 0, 0.4, 0, 0.9, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-full bg-blue-400 blur-md"
          style={{ left: `${20 * i + 10}%`, top: '-20%' }}
          animate={{
            height: ['0%', '150%'],
            opacity: [0, 1, 0],
            skewX: [0, -20, 20],
            x: [0, Math.random() * 50 - 25]
          }}
          transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-9xl font-display text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] animate-pulse">
          BLITZ!
        </h1>
      </div>
    </div>
  );
};

// 2. NATURE: Falling Leaves/Earth
export const NatureEffect: React.FC<EffectProps> = ({ active }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-900 to-amber-900 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-70"
          style={{
            backgroundColor: i % 2 === 0 ? '#22c55e' : '#78350f',
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            left: `${Math.random() * 100}%`,
            top: -50,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            x: [0, Math.random() * 100 - 50, 0]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            ease: "linear",
            repeat: Infinity
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl font-display text-green-300 drop-shadow-lg">
          NATURE
        </h1>
      </div>
    </div>
  );
};

// 3. FIRE: Fire/Sun
export const FireEffect: React.FC<EffectProps> = ({ active }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 z-0 bg-red-950 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-yellow-500 via-red-600 to-transparent opacity-50"
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-400 blur-sm"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            bottom: -20,
          }}
          animate={{
            y: -window.innerHeight,
            opacity: [1, 0],
            scale: [1, 0]
          }}
          transition={{
            duration: Math.random() * 1.5 + 0.5,
            ease: "easeOut",
            repeat: Infinity
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl font-display text-yellow-400 drop-shadow-[0_0_30px_rgba(220,38,38,1)]">
          INFERNO
        </h1>
      </div>
    </div>
  );
};

// 4. MYSTIC: Void/Stars
export const MysticEffect: React.FC<EffectProps> = ({ active }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-80" />
      
      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity
          }}
        />
      ))}
      
      {/* Nebula Swirl */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
         <div className="w-[800px] h-[800px] bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur-3xl filter" />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-8xl font-display text-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
          MYSTIC
        </h1>
      </div>
    </div>
  );
};

// 5. RAINBOW: All Colors
export const RainbowEffect: React.FC<EffectProps> = ({ active }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
            className="absolute inset-[-50%] w-[200%] h-[200%] bg-[conic-gradient(at_center,_red,_orange,_yellow,_green,_blue,_indigo,_violet,_red)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
        
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl font-display text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 drop-shadow-lg">
            ALL COLORS
            </h1>
        </div>
    </div>
  );
};

export const VisualEffectsContainer: React.FC<{ outcome: DieOutcome | null; visible: boolean }> = ({ outcome, visible }) => {
  return (
    <motion.div 
        className="fixed inset-0 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        exit={{ opacity: 0 }}
    >
      <BlitzEffect active={visible && outcome === DieOutcome.BLITZ} />
      <NatureEffect active={visible && outcome === DieOutcome.NATURE} />
      <FireEffect active={visible && outcome === DieOutcome.FIRE} />
      <MysticEffect active={visible && outcome === DieOutcome.MYSTIC} />
      <RainbowEffect active={visible && outcome === DieOutcome.RAINBOW} />
    </motion.div>
  );
};