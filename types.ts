export enum GamePhase {
  SETUP = 'SETUP',
  IDLE = 'IDLE',
  ROLLING = 'ROLLING',
  REVEAL = 'REVEAL',
  RESULT = 'RESULT',
}

export enum DieOutcome {
  BLITZ = 'BLITZ',
  NATURE = 'NATURE',
  FIRE = 'FIRE',
  MYSTIC = 'MYSTIC',
  RAINBOW = 'RAINBOW',
}

export interface DieFace {
  value: number; // 1-6
  outcome: DieOutcome;
  label: string;
  colors: string[];
  description: string;
}

export interface Player {
  id: string;
  name: string;
}

export interface GameState {
  phase: GamePhase;
  players: Player[];
  currentPlayerIndex: number;
  lastRoll: DieFace | null;
}