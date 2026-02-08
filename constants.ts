import { DieFace, DieOutcome } from './types';

export const DIE_FACES: Record<number, DieFace> = {
  1: {
    value: 1,
    outcome: DieOutcome.BLITZ,
    label: 'BLITZ',
    colors: ['#3b82f6', '#e2e8f0'], // Blue & Silver
    description: 'Electric Blue & Silver',
  },
  2: {
    value: 2,
    outcome: DieOutcome.NATURE,
    label: 'GREEN & BROWN',
    colors: ['#22c55e', '#78350f'], // Green & Brown
    description: 'Earth & Nature',
  },
  3: {
    value: 3,
    outcome: DieOutcome.FIRE,
    label: 'YELLOW & RED',
    colors: ['#eab308', '#dc2626'], // Yellow & Red
    description: 'Fire & Sun',
  },
  4: {
    value: 4,
    outcome: DieOutcome.MYSTIC,
    label: 'PURPLE & BLACK',
    colors: ['#a855f7', '#000000'], // Purple & Black
    description: 'Night & Mystic',
  },
  5: {
    value: 5,
    outcome: DieOutcome.RAINBOW,
    label: 'ALL COLORS',
    colors: ['#ef4444', '#eab308', '#22c55e', '#3b82f6', '#a855f7'], // Rainbow
    description: 'Wildcard Rainbow',
  },
  6: {
    value: 6,
    outcome: DieOutcome.BLITZ,
    label: 'BLITZ',
    colors: ['#3b82f6', '#e2e8f0'], // Blue & Silver
    description: 'Electric Blue & Silver',
  },
};

export const ANIMATION_DURATION_ROLL_MS = 3000;
export const ANIMATION_DURATION_REVEAL_MS = 2000;