import { JobProgression } from "./job";


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
      xpPerTick: 100,
    },
  ],
};
