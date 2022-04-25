import { SectionInterface } from '../interfaces/section';

export const JOB_LIST: SectionInterface[] = [
  {
    id: 2,
    name: 'Military',
    requirements: [
      {
        job: {
          reqIdToUnlock: 1,
          reqAmountToUnlock: 1,
        },
      },
    ],
    progressBarItems: [
      {
        id: 1,
        name: 'Squire',
        tooltip: 'Squires are the most basic of soldiers. They are the first to enter the ranks of the army.',
        isLocked: false,
        gain: {
          money: 10,
          exp: 0,
        },
        level: 1,
        xpEarned: 10,
        xpToNextLevel: 10,
      },
    ],
  },
  {
    id: 1,
    name: 'Common work',
    requirements: [
      {
        job: {
          reqIdToUnlock: 1,
          reqAmountToUnlock: 1,
        },
      },
    ],
    progressBarItems: [
      {
        id: 1,
        name: 'Begger',
        tooltip: 'Begger',
        isLocked: false,
        gain: {
          money: 10,
          exp: 0,
        },
        level: 1,
        xpEarned: 10,
        xpToNextLevel: 10,
      },
    ],
  },
];
