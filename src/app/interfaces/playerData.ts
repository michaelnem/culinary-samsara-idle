import {SectionInterface} from "./section";

export interface JobProgression {
  id: number;
  level: number;
  xpEarned: number;
  xpToNextLevel: number;
}

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
    }
  ]
}
