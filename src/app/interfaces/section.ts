import { ProgressBarItem } from './progress-bar-item';

interface Requirements {
  job?: Requirement;
  skill?: Requirement;
  research?: Requirement;
}

interface Requirement {
  reqIdToUnlock: number;
  reqAmountToUnlock: number;
}

export interface SectionInterface {
  id: number;
  name: string;
  requirements: Requirements[];
  progressBarItems: ProgressBarItem[];
}


const JOBS: SectionInterface = {
  id: 1,
  name: 'job',
  requirements: [],
  progressBarItems: [
    {
      id: 1,
      name: 'knife cutting',
      baseCost: 8,
      tooltip: 'Cut a knife',
      baseXpPerLevel: 1,
    }
  ]
};
