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
