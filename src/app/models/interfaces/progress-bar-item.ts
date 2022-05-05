import { JobProgression } from "./job";


export interface Multiplier {
  effectsOn: string;
  value: number;
}

export interface ProgressBarItem {
  id: number;
  name: string;
  tooltip?: string;
  multipliers?: Multiplier[];
  baseXpPerLevel: number;
  baseCost: number;
  data?: JobProgression;
}
