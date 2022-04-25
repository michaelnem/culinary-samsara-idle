export interface ProgressBarItem {
  id: number;
  name: string;
  isLocked: boolean;
  tooltip: string;
  level: number;
  gain: {
    money: number;
    exp: number;
  };
  //How far into the level we are
  xpEarned: number;
  //How much xp we have left to go to the next level
  xpToNextLevel: number;
}
