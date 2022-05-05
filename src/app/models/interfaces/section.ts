import { ProgressBarItem } from './progress-bar-item';

interface Requirements {
  //Key is progressBarItem.id
  [key: number]: Requirement;
}

interface Requirement {
  reqIdToUnlock: number; //progressBarItem.id that gets unlocked when this requirement is met
  reqAmountToUnlock: number;
}

export interface SectionInterface {
  id: number;
  name: string;
  requirements: Requirements[];
  progressBarItems: ProgressBarItem[];
}

export const STATIC_KITCHEN_JOBS: SectionInterface = {
  id: 1,
  name: 'Kitchen jobs',
  requirements: [
    {
      1: {
        // progressBarItem.id the requirement is applied to
        reqIdToUnlock: 2, //Look notes on interface
        reqAmountToUnlock: 500, //Cost of the item to unlock
      },
    },
  ],
  progressBarItems: [
    {
      id: 1, //!MUST BE UNIQUE ACROSS ALL SectionInterfaces and ProgressBarItems
      name: 'knife cutting',
      baseCost: 8,
      tooltip: 'Cut a knife',
      baseXpPerLevel: .1,
    },
    {
      id: 2,
      name: 'hammering',
      baseCost: 8,
      tooltip: 'Hammer a hammer',
      baseXpPerLevel: .1,
    },
  ],
};
