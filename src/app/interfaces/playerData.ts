import { SectionInterface } from './section';
import { BaseItemProgressionData } from '../services/baseProgression';

export interface JobProgression extends BaseItemProgressionData {}

export interface ProgressionType {
  [key: string]: JobProgression[];
}

export interface PlayerData {
  lifeSpan: number;
  coins: number;
  happiness: number;
  progression: ProgressionType;
}

const progression: ProgressionType = {
  jobs: [
    {
      id: 1,
      level: 3,
      xpEarned: 100,
      xpToNextLevel: 300,
    },
  ],
};
