import {SectionInterface} from "./section";

export interface PlayerData {
  age: {
    years: number;
    days: number;
  };
  lifeSpan: number;
  coins: number;
  happiness: number;
  progression: {
    [key: string]: {
      id: number;
      level: number;
      xpEarned: number;
      xpToNextLevel: number;
    }[];
  };
}
