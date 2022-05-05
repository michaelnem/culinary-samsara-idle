import { BaseItemProgressionData } from '../classes/baseProgression';

export type JobProgression = BaseItemProgressionData;

export const NO_JOB: Readonly<JobProgression> = {
    id: 0,
    level: 0,
    xpEarned: 0,
    xpToNextLevel: 0,
    xpPerTick: 0,
};
